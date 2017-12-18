

# ![DataTrain](https://gitlab.com/datatrain/datatrain-webapp/raw/master/public/datatrain.png) - 3D-Dashboard

## Zusammenfassung

Dieses Dashboard visualisiert Daten aus dem Colibri-W Dataset der Deutschen Bahn, welches zum DB Hackathon 2017 im db mindspace zur Verfügung gestellt wurde. https://dbmindbox.com/de/db-opendata-hackathons/

![DataTrain Screenshot](https://gitlab.com/datatrain/datatrain-webapp/raw/master/screenshot.jpg)

## Technologien

Das Dashboard besteht aus einem NodeJS-Webserver und einer Reihe von Frontend-Technologien (HTML, CSS + Bootstrap-Framework, JavaScript-Frameworks jQuery für API-Calls an den Server und ThreeJS für die Darstellung und Manipulation von 3D-Inhalten mit WebGL).

#### Daten: Colibri-W Dataset
[http://hackathon.colibri-labs.de/info.php]
In diesem Dashboard wird via Backend/Server auf die Daten vom API-Endpoint sensors.json zugegriffen

#### Frontend: Bootstrap-Boilerplate für Dashboards
SB Admin 2 mit jQuery und Bootstrap [https://github.com/BlackrockDigital/startbootstrap-sb-admin-2]  
Das Dashboard wurde als Basis für das User Interface genutzt, mit jQuery wird die Backend-API angesprochen und die Daten in den HTML-Elementen erneuert. Einzelne HTML-Komponenten wurden hierfür verändert, vieles entfernt. Geplant war noch eine Kartendarstellung der letzten GPS-Positionen mit Leaflet und OpenStreetMap-Kartendaten.

#### Frontend: 3D-Darstellungen via WebGL
ThreeJS - WebGL Javascript Library [https://github.com/mrdoob/three.js] [https://threejs.org/]  
Mit ThreeJS wird das Modell eines ICE dargestellt. Dabei wird das Modell, welches als .dae-Datei in die 3D-Szene geladen wird, zusätzlich durch "manuell erzeugte" Blöcke ergänzt, welche die Klimaanlage und die Wassertanks darstellen. Die einzelnen Komponenten (Hülle des ICE und einzelne Blocks) lassen sich direkt ansteuern. Umgesetzt wurde ein Transparenz-Modus für die ICE-Hülle, mit ein paar Zeilen Code ließen sich die Blöcke highlighten / einfärben oder der Wasserstand virtuell anzeigen.

#### 3D-Modell: ICE2 Train carriage with interior and rigged doors  
Original von User Tyble auf [https://www.blendswap.com/blends/view/81176]. [BY-CC Lizenz](https://creativecommons.org/licenses/by/3.0/)  
In unserer Version wurde ein Teil des Innenlebens Zwecks besserer Sichtbarkeit der hinzugefügten Tanks und Reduzierung der Polygonzahl des Modells entfernt, hierfür wurde die Open Source 3D-Software Blender eingesetzt und das Modell als .dae-Datei (Collada) exportiert. Das abgespeckte Modell, in dem noch Animationen zum öffnen und schließen der Türen mit exportiert sind ist immernoch 77 MB groß und ließe sich um ein vielfaches verkleinern, wenn ein wenig Zeit in die Vereinfachung des Modells geflossen wäre.

#### Backend: NodeJS mit Packages Express + http
via [http://expressjs.com/de/] [https://nodejs.org/api/http.html] - unter Open Source Lizenzen veröffentlicht
Express wird als Webserver eingesetzt, der das HTML-Dashboard ausliefert und gleichzeitig die Daten über einen API-Endpunkt bereit stellt. Via http-Package wird die Colibri-W API ansteuert - es wurden alle API-Calls als Bibliothek exemplarisch umgesetzt, für das Dashboard kommt der Sensorik-API-Endpunkt zum Einsatz.


### Installation

#### Voraussetzungen

* NodeJS ist installiert (https://nodejs.org/) und der Node Package Manager kann via npm aufgerufen werden
* Git ist installiert (https://git-scm.com/)

#### Installation

In der Kommandozeile ausführen:

1. `git clone https://gitlab.com/datatrain/datatrain-webapp`

2. `cd datatrain-webapp` 

3. `npm install` installiert die NodeJS-Pakete http und express

4. `node server.js` startet den Server.

Der Server sollte nun unter http://localhost:8080/ erreichbar sein

### Team

Finn Malte Hinrichsen  
Anna-Katharina Rausch  

