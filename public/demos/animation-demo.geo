let animation_demo_text = `import json from "https://api.covidtracking.com/v1/states/wa/current.json" as covid_data

Circle: (10 > 5):
::Color(204, covid_data["negative"] % 255, 0)
::Scale(millis() / 25 % 100)
::Translate(150, 250)
::Model("circle")

Rectangle: default:
::Color(covid_data["totalTestResults"] % 255, 153, 0)
::Scale(25, 25)
::Translate(mouseX, mouseY)
::Model("rect")

Arc: default:
::Color(120, 15, 0)
::Scale(80, 80, 0, millis() / 1000)
::Translate(150, 150)
::Model("arc")`;