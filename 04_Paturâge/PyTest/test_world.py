import program.world as script
import pytest


#########################################
########## Test sur AGENT ###############
#########################################

class TestAgent:
    def setup_method(self):
        self.agent = script.Agent(3)

    #   - modifier un attribut position
    def test_set_position(self):
        self.agent.position = 5
        assert self.agent.position == 5

    #   - récupérer un attribut position
    def test_get_position(self):
        assert self.agent.position == 3

    #   - assigner un dictionnaire en tant qu'attributs
    def test_set_agent_attributes(self):
        agent = script.Agent(3, agreeableness=1)
        assert agent.agreeableness == 1


#########################################
########## Test sur POSITION ############
#########################################

class TestPosition:
    POSITION = script.Position(80, 35)

    #   - modifier un attribut longitude_degrees
    def test_longitude_degrees(self):
        assert self.POSITION.longitude_degrees == 80

    #   - modifier un attribut latitude_degrees
    def test_latitude_degrees(self):
        assert self.POSITION.latitude_degrees == 35

    #   - modifier un attribut longitude_degrees avec une valeur supérieure à 180 renvoie une erreur.
    def test_longitude_degrees_range(self):
        with pytest.raises(AssertionError):
            position = script.Position(200, 48)

    #   - modifier un attribut latitude_degrees avec une valeur supérieure à 90 renvoie une erreur.
    def test_latitude_degrees_range(self):
        with pytest.raises(AssertionError):
            position = script.Position(100, 200)

    #   - récupérer une latitude
    def test_latitude(self):
        return self.POSITION.latitude == 0.6108652381980153

    #   - récupérer une longitude
    def test_longitude(self):
        return self.POSITION.longitude == 1.3962634015954636


#########################################
########### Test sur ZONE ###############
#########################################

class TestZone:

    def setup_method(self):
        self.position1 = script.Position(80, 35)
        self.position2 = script.Position(100, 42)
        self.zone = script.Zone(self.position1, self.position2)
        script.Zone._initialize_zones()
        self.agent = script.Agent(self.position1, agreeableness=1)
        self.zone.inhabitants = [self.agent]

    def teardown_method(self):
        script.Zone.ZONES = []

    #   - récupérer toutes les instances Zone (Zone.ZONES)
    def test_get_zones(self):
        assert len(script.Zone.ZONES) == 64800

    #   - trouver une zone qui contient une position
    def test_find_zone_that_contains(self):
        found_zone = script.Zone.find_zone_that_contains(self.position1)
        assert found_zone.corner1.longitude == self.zone.corner1.longitude

    #   - ajouter un habitant dans une zone
    def test_add_inhabitant_in_zone(self):
        self.zone.add_inhabitant(self.agent)
        assert len(self.zone.inhabitants) == 2

    #   - récupérer la densité de population d'une zone
    def test_get_population_density(self):
        assert self.zone.population_density() == 5.776995363373171e-07

    #   - récupérer l'agréabilité moyenne d'une zone
    def test_get_average_agreeableness(self):
        assert self.zone.average_agreeableness() == 1


#########################################
###### Test sur l'agréabilité ###########
#########################################

class TestAgreeablenessGraph:
    """
    On commence par créer toutes les zones et on ajoute au minimum 10 habitants pour vérifier la densité de population
    """
    @classmethod
    def setup_class(cls):
        script.Zone._initialize_zones()
        cls.ZONE = script.Zone.ZONES[0]
        cls.GRAPH = script.AgreeablenessGraph()
        cls.ZONES = script.Zone.ZONES
        for _ in range(0,10):
            cls.ZONE.add_inhabitant(script.Agent(script.Position(-180, -89), agreeableness=1))

    #   - récupérer un titre
    def test_get_title(self):
        assert self.GRAPH.title == "Nice people live in the countryside"

    #   - récupérer x_label
    def test_get_x_label(self):
        assert self.GRAPH.x_label == "population density"

    #   - récupérer y_label
    def test_get_y_label(self):
        assert self.GRAPH.y_label == "agreeableness"

    #   - récupérer xy_values sous forme de tuples
    def test_xy_values(self):
        assert len(self.GRAPH.xy_values(self.ZONES)) == 2

    #   - la première valeur de xy_values est la densité de population moyenne
    def test_average_population_density(self):
        assert self.GRAPH.xy_values(self.ZONES)[0][0] == self.ZONE.population_density()

    #   - la seconde valeur de xy_values est l'agréabilité moyenne
    def test_average_agreeableness(self):
        assert self.GRAPH.xy_values(self.ZONES)[1][0] == self.ZONE.average_agreeableness()


#########################################
###### Test sur le revenu/âge ###########
#########################################

class TestIncomeGraph:

    @classmethod
    def setup_class(cls):
        script.Zone._initialize_zones()
        cls.ZONE = script.Zone.ZONES[0]
        cls.GRAPH = script.IncomeGraph()
        cls.ZONES = script.Zone.ZONES
        for _ in range(0, 10):
            cls.ZONE.add_inhabitant(script.Agent(script.Position(-180, -89), income=40, age=20))

    def setup_teardown(self):
        script.Zone.ZONES = []

    #   - récupérer un titre
    def test_get_title(self):
        assert self.GRAPH.title == "Older people have more money"

    #   - récupérer x_label
    def test_get_x_label(self):
        assert self.GRAPH.x_label == "age"

    #   - récupérer y_label
    def test_get_y_label(self):
        assert self.GRAPH.y_label == "income"

    #   - récupérer xy_values sous forme de tuples
    def test_get_xy_values_into_tuple(self):
        assert len(self.GRAPH.xy_values(self.ZONES)) == 2

    #   - la première valeur de xy_values est l'âge
    def test_get_first_value_is_age(self):
        assert self.GRAPH.xy_values(self.ZONES)[0][20] == 20

    #   - la seconde valeur de xy_values est le revenu
    def test_get_secund_value_is_income(self):
        assert self.GRAPH.xy_values(self.ZONES)[1][20] == 40


#########################################
###### Test sur le graphe par TDD #######
#########################################

class TestAgreeablenessPerAgeGraph:
    def setup_method(self):
        script.Zone._initialize_zones()
        self.zone = script.Zone.ZONES[0]
        self.graph = script.AgreeablenessPerAgeGraph()
        self.zones = script.Zone.ZONES
        for _ in range(0,10):
            self.zone.add_inhabitant(script.Agent(script.Position(-180, -89), agreeableness=1, age=50))

    def test_title(self):
        assert self.graph.title == "Nice people are young"

    def test_x_label(self):
        assert self.graph.x_label == "age"

    def test_y_label(self):
        assert self.graph.y_label == "agreeableness"

    def test_xy_values(self):
        assert len(self.graph.xy_values(self.zones)) == 2

    def test_age(self):
        assert self.graph.xy_values(self.zones)[0][50] == 50

    def test_average_agreeableness_by_age(self):
        assert self.graph.xy_values(self.zones)[1][50] == 1