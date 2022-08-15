from _pytest import tmpdir

import program.download_agents as script
import urllib.request
import json
from io import BytesIO


def test_http_return(monkeypatch, tmpdir):
    results = [{
        "age": 84,
        "agreeableness": 0.74
    }]

    def mockreturn(request):
        return BytesIO(json.dumps(results).encode())

    monkeypatch.setattr(urllib.request, "urlopen", mockreturn)

    # créer un dossier
    p = tmpdir.mkdir("program").join("agents.json")

    # exécuter la fonction main du fichier
    script.main(["--dest", str(p), "--count", "1"])

    # teste du contenu du répertoire
    local_res = json.load(open(p))
    assert local_res == script.get_agents(1)