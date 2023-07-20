import React,  { useState } from 'react';

const IdeaComponent = () => {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const handleInfoClick = (info) => {
    setSelectedInfo(info);
  };
  
  return (
      <div className="idea-container">
         <h2>Ideen zur Nutzung des Tools und Analyseaufgaben</h2>
        <div className="IdeasContainer">
        <p><strong>Aufgaben mit Beispielen:</strong></p>
        <p>Benutze die Beispiele mithilfe der Buttons oben links und mache dich mit der Benutzung und Funktion der Blöcke vertraut. Klicke auf die Aufgaben, um die einzelen Aufgabenstellungen zu lesen.</p>
          <ul className="Examples">
          <li onClick={() => handleInfoClick('Lade das 1. Beispiel und schaue dir die Blöcke an. Was wäre eine mögliche These, die die vorliegenden Daten untersuchen könnte? Kannst du dir deine These mit den Ergebnissen auch beantworten?')} className="clickable-item">Aufgabe 1</li>
          <li onClick={() => handleInfoClick('Lade das 2. Beispiel und stelle deine Daten mithilfe eines Scatterplots dar. Was genau zeigt er an und wie würdest du ihn interpretieren?')} className="clickable-item">Aufgabe 2</li>
          <li onClick={() => handleInfoClick('Lade das 3. Beispiel und finde heraus, welche der drei verwendeten Senseboxen in letzter Zeit am schnellsten unterwegs war. Wie kommt das Tool auf das Ergebnis und was müsstest du verändern, um die langsamste Sensebox zu finden?')} className="clickable-item">Aufgabe 3</li>
          </ul>
        <p><strong>Weitere Aufgaben:</strong></p>
        <p>Versuche nun die freien Aufgaben zu lösen. Klicke auf die Aufgabe, um die Aufgabenstellung zu lesen und nutze die Hilfen im Wiki oder in der Blockbeschreibung, falls du nicht weiterkommst.</p>
          <ul className="Beginner">
          <li onClick={() => handleInfoClick('Wo befindet sich Box #29 aktuell? Benutze dafür die Blöcke und suche sie anschließend auf der Karte.')} className="clickable-item">Aufgabe 4</li>
          <li onClick={() => handleInfoClick('Hole dir die Sensorwerte einer Box deiner Wahl, für die du dich interessierst. Speichere sie in einer Variable ab und lasse dir eine Zusammenfassung über deine Stichprobe ausgeben. Was sagen die einzelnen Werte aus? Warum ist der Median unterschiedlich vom Mittelwert und kannst du das Streuungsmaß mit den Quantilen bestimmen?')} className="clickable-item">Aufgabe 5</li>
          <li onClick={() => handleInfoClick('Sieh dir den Boxplot der Feinstaubmessungen PM10 von Sensebox #6 auf der About-Seite an und deute die Darstellung. Nutze die Informationen über Visualisierungsformen im Wiki.')} className="clickable-item">Aufgabe 6</li>
          <li onClick={() => handleInfoClick('Die Temperatur im Juli 2022 betrug in Deutschland durchschnittlich 19,2°C. Hole dir die Temperaturwerte der SenseBox #6 und führe einen gerichteten Einstichproben-t-Test mit den SenseBox Daten als dein Sample durch. Deine zu untersuchende Hypothese lautet: Die Temperaturen im Juli 2023 gemessen durch Sensebox #6 sind signifikant größer sind als der Bundesdurchschnitt im letzten Jahr. Deine H0 lautet also: Die Temperaturen im Juli 2023 gemessen durch Sensebox #6 sind gleich groß wie der Bundesdurchschnitt im letzten Jahr. Kannst du H0 ablehnen? Denke daran, dass der t-Test als Eingabe für deinen Sample einen numerischen Wert erwartet und der Name deiner Variable als Text gespeichert ist. Du solltest nach einem geeigneten Block in den "Operationen" suchen, um den Datentyp deiner Variable zu verändern! ')} className="clickable-item">Aufgabe 7</li>
          </ul>
        <p><strong>Lösungsansätze:</strong></p>
        <p>Schaue dir die Musterlösungen zu den einzelnen Aufgaben an, um deine Ergebnisse zu vergleichen. </p>
        <ul className="Examples">
        <li onClick={() => handleInfoClick('Das 1. Beispiel lädt Blöcke ein, die die letzten gemessenen Temperaturwerte von SenseBox #3 und SenseBox #10 in jeweils den Variablen tempBox3 und tempBox10 speichern. Anschließend wird für jede Stichprobe der Mittelwert berechnet und eine Vergleichsoperation - in diesem Fall > - durchgeführt. Die Wahl der Blöcke zielt darauf ab, herauszufinden, welche Box im Durchschnitt höhere Temperaturen gemessen hat. Die These dazu könnte also lauten: SenseBox #3 hat in letzter Zeit höhere Werte für den Temperatursensor erhalten, als SenseBox #6. Da du als Ergebnis TRUE erhälst, kannst du diese Annahme nun auch bestätigen. ')} className="clickable-item">Lösung Aufgabe 1</li>
        <li onClick={() => handleInfoClick('Das 2. Beispiel beschafft die letzten Temperatur- und Luftfeuchtigkeitsmessungen der SenseBox #6. Anschließend wird ein Scatterplot mit der Temperatur auf der x-Achse und der Luftfeuchtigkeit auf der y-Achse erstellt und eine Regressionslinie eingezeichnet, falls eine Beziehung zwischen den beiden Variablen besteht. Dein Plot zeigt eine zufällige Anordnung der Wertepaare aus Temperatur und Luftfeuchtigkeit. Das deutet darauf hin, dass die Werte nicht miteinander korrelieren. Man kann also beispielsweise nicht erkennen, dass ein erhöhter Temperaturwert ein Ansteigen oder Fallen der Luftfeuchtigkeit verursachen würde. ')} className="clickable-item">Lösung Aufgabe 2</li>
        <li onClick={() => handleInfoClick('Das 3. Beispiel beinhaltet Anfragen an die Geschwindigkeitsmessungen von 3 Boxen. Diese werden in die Variablen speebBox3, speedBox5 und speedBox23 gespeichert. Der letzte verschachtelte Teil füllt eine Liste mit den Mittelwerten dieser Geschwindigkeitsmessungen, die Liste beinhaltet also genau 3 Werte. Der Block, der diese Liste umschließt berechnet den größten Wert diese Liste. Das ist also nichts anderes als die durchschnittliche Geschwindigkeit der schnellsten Box. Man kann den Block so verändern, dass er den kleinsten Wert aus der Liste suchen würde. Dazu muss einfach "maximum von" in "miimum von" getauscht werden und der Code findet nun die langsamste Box. ')} className="clickable-item">Lösung Aufgabe 3</li>
        <li onClick={() => handleInfoClick('Um den Standort einer Box zu bestimmen, nutze den "Aktuelle Koordinaten"-Block aus der Senseboxen-Kategorie und verknüpfe ihn mit SenseBox #29. Dein Ergebnis enthält zwei Werte im Dezimalgrad, lat und lon. Der lat Wert gibt an, auf welchem Breitengrad sich deine Box befindet und lon beschreibt die Position auf dem Längengrad der Erde. Die Karte findest du unter dem Reiter "Map" gleich neben dem Wiki. Die Marker repräsentieren die Standorte jeder Box und sind mit einem kleinen Textfeld ausgestattet. Wenn du sie anklickst, findest du heraus, welcher Marker zu welcher SenseBox gehört.  ')} className="clickable-item">Lösung Aufgabe 4</li>
        <li onClick={() => handleInfoClick('Um die Werte eines Sensors einer Box zu erfahren, wähle einen Block aus der Kategorie "Sensor-Anfragen" und kombiniere ihn mit einer Box aus der Kategorie "Senseboxen". Um die Daten in einer Variable zu speichern, suche unter "Operationen" nach dem Block, der einen Sensorwert aus der Dropdown-Liste unter einem Namen speichert, den du ihm mit dem Textfeld aus "Listen und Text" gibst. Eine Zusammenfassung über eine Stichprobe erstellt R mit der summary() Funktion, die in dem Block mit dem Titel "Summe" unter "Datenanalyse" zu finden ist. Du erhälst jetzt Informationen über den kleinsten und größten Wert deiner Stichprobe, das 1. und 3. Quartil sowie den Mittelwert und den Median. Der Median stellt hier den Wert dar, bei dem 50% der Werte einen höheren Wert haben, der Mittelwert ist hingegen der Durchschnitt aller Werte. Um den Median zu bestimmen, kannst du deine Daten sortieren und die Mitte wählen, falls du eine ungerade Anzahl an Werten hast. Um den Mittelwert zu berechnen, musst du alle Werte addieren und durch die Anzahl der Werte teilen. Das Streuungsmaß kann mithilfe der Quartile berechnet werden, indem du den Wert des 1. Quartils vom Wert des 3. Quartils abziehst und die Differenz betrachtest, also die Hälfte aller Werte, die sich um den Median befinden. ')} className="clickable-item">Lösung Aufgabe 5</li>
        <li onClick={() => handleInfoClick('Um Aufgabe 6 zu lösen, benötigst du im Moment keine weiteren Blöcke. Wenn du dir die Informationen im Wiki durchgelesen hast, weißt du, dass der Boxplot auf der About Seite aus verschiedenen Bestandteilen besteht, die dir unterschiedliche Informationen über die Stichprobe verraten. Die Beschriftung der x-Achse und y-Achse geben an, dass es sich um einen Boxplot des Feinstaubs PM10 handelt und sich die Werte der Variable etwa zwischen 2.5 und 5.5 μg/m³ befinden. Die namensgebende Box zeigt dir das 1. und 3. Quartil sowie den Median als Linie eingezeichnet. Der Median befindet sich also etwa bei 3.3. Die Whisker des Plots geben den kleinsten und größten Wert der Stichprobe an, hier also etwa 2.6 und 4.6. Die Stichprobe scheint auch einen Ausreißer zu beinhalten bei etwa 5.4, der durch den Kreis am oberen Ende des Plots dargestellt wird. Du kannst deine Einschätzungen der Werte überprüfen, indem du dir die Zusammenfassung der PM10 Messung von SenseBox #6 mithilfe der Blöcke ausgeben lässt (s. Aufgabe 4). ')} className="clickable-item">Lösung Aufgabe 6</li>
        <li onClick={() => handleInfoClick('Um den t-Test durchführen zu können, musst du dir dein Sample beschaffen, indem du unter "Sensor-Anfragen" den Block für die Temperaturmessungen auswählst und diesen mit SenseBox #6 kombinierst. Speichere die Daten in einer Variable mit Namen deiner Wahl und wähle in der Liste des Blocks "Temperatur" aus, damit die passenden Werte gespeichert werden. Nun musst du den Block für den Einstichproben-t-Test verwenden und kannst das Sample und den Mittelwert der Grundgesamtheit eintragen. Dein Sample ist unter dem Variablennamen gespeichert. Füge den Namen in den "Konvertiere Datentyp" Block in den "Operationen" und ändere somit den Datentyp von Text zu numerisch, damit der t-Test damit arbeiten kann. Der Mittelwert ist aus der Aufgabenstellung bekannt und du kannst ihn mit einem einfachen Block für eine Zahleneingabe aus der Kategorie "Mathematik" dort eintragen. Die für die Interpretation deines Ergebnisses entscheidenden Werte sind die des t-Werts und des p-Werts. Der p-Wert ist mit 7.869e-16 sehr nah an 0 (0,0000000000000007869), was darauf hindeutet, dass es sehr unwahrscheinlich ist, dass die Nullhypothese wahr ist. Zudem lässt die Tatsache dass der p-Wert positiv ist (30.164) darauf schließen, dass der Mittelwert des Samples höher ist, als der gegebene.  Wir können die H0 also verwerfen und darauf schießen, dass es einen signifikanten Unterschied zwischen dem sample-Mittelwert (20,74) und dem Mittelwert der Grundgesamtheit gibt (19,2). ')} className="clickable-item">Lösung Aufgabe 7</li>
        </ul>

          {selectedInfo && (
        <div className="info-popup-container">
          <div className="info-popup">
            <button className="close-button" onClick={() => setSelectedInfo(null)}>Zurück</button>
            <p>{selectedInfo}</p>
          </div>
        </div>
      )}
        </div>
      </div>
    
  );
};

export default IdeaComponent;
