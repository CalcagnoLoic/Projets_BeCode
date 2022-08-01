<?php
class Voiture {
    public $numberPlate;
    protected $registrationNumber;
    public $date;
    protected $registrationDate;
    public $mileage;
    protected $model;
    protected $brand;
    public $color;
    public $weight;

    public function __construct($numberPlate, $registrationNumber, $date, $registrationDate, $mileage, $model, $brand, $color, $weight)
    {
        $this->numberPlate = $numberPlate;
        $this->registrationNumber = $registrationNumber;
        $this->date = $date;
        $this->registrationDate = $registrationDate;
        $this->mileage = $mileage;
        $this->model = $model;
        $this->brand = $brand;
        $this->color = $color;
        $this->weight = $weight;
    }

    public function numberPlate()
    {
        return $this->numberPlate;
    }
    
    public function registrationNumber()
    {
        if ($this->registrationNumber == "BE" || $this->registrationNumber == "be") {
            return "Belgium";
        } elseif ($this->registrationNumber == "FR" || $this->registrationNumber == "fr"){
            return "France";
        } elseif ($this->registrationNumber == "DE" || $this->registrationNumber == "de"){
            return "Germany";
        } else {
            return "We do not sell cars in this country";
        }
    }

    public function date()
    {
        return $this->date;
    }

    public function registrationDate()
    {
        $now = date("Y");
        $date = $this->registrationDate;
        return $now - $date . " years";
    }

    public function mileage()
    {
        if ($this->mileage < 100000) {
            return "Low : $this->mileage kms";
        } elseif (100001 < $this->mileage &&  $this->mileage < 200000) {
            return "Middle : $this->mileage kms";
        } else {
            return "High : $this->mileage kms" ;
        }
    }

    public function model()
    {
        if($this->model == "audi" || $this->model == "AUDI" || $this->model == "Audi") {
            return "Audi : Reserved";
        } else {
            return "$this->model : Free";
        }
    }

    public function brand()
    {
        return $this->brand;
    }

    public function color()
    {
        return $this->color;
    }

    public function weight()
    {
        if($this->weight > 3.5) {
            return "Utility vehicle : $this->weight T" ;
        } else {
            return "Commercial vehicle : $this->weight T";
        }
    }

    public function display() 
    {
        return "
                <tr>
                <td>{$this->numberPlate()}</td>
                <td>{$this->registrationNumber()}</td>
                <td>{$this->date()}</td>
                <td>{$this->registrationDate()}</td>
                <td>{$this->mileage()}</td>
                <td>{$this->model()}</td>
                <td>{$this->brand()}</td>
                <td>{$this->color()}</td>
                <td>{$this->weight()}</td>
                </tr>";
    }
}
?>