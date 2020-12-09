let covid_demo_text = `import json from "./geojson/us_states_20m.json" as us_states
import csv from "https://api.covidtracking.com/v1/states/current.csv" as covid_csv

Arizona: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[4]["positiveIncrease"]))
::Model(us_states["features"][0])

Arizona_Details_Box: (IsHovering(Arizona)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[4]["positiveIncrease"]))
::Model("rect")


Arizona_Details_Text: (IsHovering(Arizona)):
::Translate("Arizona Covid Stats \\n" + "Total Test Results: " + covid_csv[4]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[4]["positive"] + "\\nTotal Negative Cases: " + covid_csv[4]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[4]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Arkansas: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[2]["positiveIncrease"]))
::Model(us_states["features"][1])

Arkansas_Details_Box: (IsHovering(Arkansas)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[2]["positiveIncrease"]))
::Model("rect")


Arkansas_Details_Text: (IsHovering(Arkansas)):
::Translate("Arkansas Covid Stats \\n" + "Total Test Results: " + covid_csv[2]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[2]["positive"] + "\\nTotal Negative Cases: " + covid_csv[2]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[2]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


California: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[5]["positiveIncrease"]))
::Model(us_states["features"][2])

California_Details_Box: (IsHovering(California)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[5]["positiveIncrease"]))
::Model("rect")


California_Details_Text: (IsHovering(California)):
::Translate("California Covid Stats \\n" + "Total Test Results: " + covid_csv[5]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[5]["positive"] + "\\nTotal Negative Cases: " + covid_csv[5]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[5]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Colorado: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[6]["positiveIncrease"]))
::Model(us_states["features"][3])

Colorado_Details_Box: (IsHovering(Colorado)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[6]["positiveIncrease"]))
::Model("rect")


Colorado_Details_Text: (IsHovering(Colorado)):
::Translate("Colorado Covid Stats \\n" + "Total Test Results: " + covid_csv[6]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[6]["positive"] + "\\nTotal Negative Cases: " + covid_csv[6]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[6]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Connecticut: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[7]["positiveIncrease"]))
::Model(us_states["features"][4])

Connecticut_Details_Box: (IsHovering(Connecticut)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[7]["positiveIncrease"]))
::Model("rect")


Connecticut_Details_Text: (IsHovering(Connecticut)):
::Translate("Connecticut Covid Stats \\n" + "Total Test Results: " + covid_csv[7]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[7]["positive"] + "\\nTotal Negative Cases: " + covid_csv[7]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[7]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


DistrictOfColumbia: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[8]["positiveIncrease"]))
::Model(us_states["features"][5])

DistrictOfColumbia_Details_Box: (IsHovering(DistrictOfColumbia)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[8]["positiveIncrease"]))
::Model("rect")


DistrictOfColumbia_Details_Text: (IsHovering(DistrictOfColumbia)):
::Translate("DistrictOfColumbia Covid Stats \\n" + "Total Test Results: " + covid_csv[8]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[8]["positive"] + "\\nTotal Negative Cases: " + covid_csv[8]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[8]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Georgia: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[11]["positiveIncrease"]))
::Model(us_states["features"][6])

Georgia_Details_Box: (IsHovering(Georgia)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[11]["positiveIncrease"]))
::Model("rect")


Georgia_Details_Text: (IsHovering(Georgia)):
::Translate("Georgia Covid Stats \\n" + "Total Test Results: " + covid_csv[11]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[11]["positive"] + "\\nTotal Negative Cases: " + covid_csv[11]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[11]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Hawaii: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[13]["positiveIncrease"]))
::Model(us_states["features"][7])

Hawaii_Details_Box: (IsHovering(Hawaii)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[13]["positiveIncrease"]))
::Model("rect")


Hawaii_Details_Text: (IsHovering(Hawaii)):
::Translate("Hawaii Covid Stats \\n" + "Total Test Results: " + covid_csv[13]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[13]["positive"] + "\\nTotal Negative Cases: " + covid_csv[13]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[13]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Illinois: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[16]["positiveIncrease"]))
::Model(us_states["features"][8])

Illinois_Details_Box: (IsHovering(Illinois)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[16]["positiveIncrease"]))
::Model("rect")


Illinois_Details_Text: (IsHovering(Illinois)):
::Translate("Illinois Covid Stats \\n" + "Total Test Results: " + covid_csv[16]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[16]["positive"] + "\\nTotal Negative Cases: " + covid_csv[16]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[16]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Indiana: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[17]["positiveIncrease"]))
::Model(us_states["features"][9])

Indiana_Details_Box: (IsHovering(Indiana)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[17]["positiveIncrease"]))
::Model("rect")


Indiana_Details_Text: (IsHovering(Indiana)):
::Translate("Indiana Covid Stats \\n" + "Total Test Results: " + covid_csv[17]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[17]["positive"] + "\\nTotal Negative Cases: " + covid_csv[17]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[17]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Louisiana: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[20]["positiveIncrease"]))
::Model(us_states["features"][10])

Louisiana_Details_Box: (IsHovering(Louisiana)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[20]["positiveIncrease"]))
::Model("rect")


Louisiana_Details_Text: (IsHovering(Louisiana)):
::Translate("Louisiana Covid Stats \\n" + "Total Test Results: " + covid_csv[20]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[20]["positive"] + "\\nTotal Negative Cases: " + covid_csv[20]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[20]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Minnesota: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[25]["positiveIncrease"]))
::Model(us_states["features"][11])

Minnesota_Details_Box: (IsHovering(Minnesota)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[25]["positiveIncrease"]))
::Model("rect")


Minnesota_Details_Text: (IsHovering(Minnesota)):
::Translate("Minnesota Covid Stats \\n" + "Total Test Results: " + covid_csv[25]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[25]["positive"] + "\\nTotal Negative Cases: " + covid_csv[25]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[25]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Mississippi: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[28]["positiveIncrease"]))
::Model(us_states["features"][12])

Mississippi_Details_Box: (IsHovering(Mississippi)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[28]["positiveIncrease"]))
::Model("rect")


Mississippi_Details_Text: (IsHovering(Mississippi)):
::Translate("Mississippi Covid Stats \\n" + "Total Test Results: " + covid_csv[28]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[28]["positive"] + "\\nTotal Negative Cases: " + covid_csv[28]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[28]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Montana: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[29]["positiveIncrease"]))
::Model(us_states["features"][13])

Montana_Details_Box: (IsHovering(Montana)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[29]["positiveIncrease"]))
::Model("rect")


Montana_Details_Text: (IsHovering(Montana)):
::Translate("Montana Covid Stats \\n" + "Total Test Results: " + covid_csv[29]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[29]["positive"] + "\\nTotal Negative Cases: " + covid_csv[29]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[29]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


NewMexico: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[35]["positiveIncrease"]))
::Model(us_states["features"][14])

NewMexico_Details_Box: (IsHovering(NewMexico)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[35]["positiveIncrease"]))
::Model("rect")


NewMexico_Details_Text: (IsHovering(NewMexico)):
::Translate("NewMexico Covid Stats \\n" + "Total Test Results: " + covid_csv[35]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[35]["positive"] + "\\nTotal Negative Cases: " + covid_csv[35]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[35]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


NorthDakota: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[31]["positiveIncrease"]))
::Model(us_states["features"][15])

NorthDakota_Details_Box: (IsHovering(NorthDakota)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[31]["positiveIncrease"]))
::Model("rect")


NorthDakota_Details_Text: (IsHovering(NorthDakota)):
::Translate("NorthDakota Covid Stats \\n" + "Total Test Results: " + covid_csv[31]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[31]["positive"] + "\\nTotal Negative Cases: " + covid_csv[31]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[31]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Oklahoma: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[39]["positiveIncrease"]))
::Model(us_states["features"][16])

Oklahoma_Details_Box: (IsHovering(Oklahoma)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[39]["positiveIncrease"]))
::Model("rect")


Oklahoma_Details_Text: (IsHovering(Oklahoma)):
::Translate("Oklahoma Covid Stats \\n" + "Total Test Results: " + covid_csv[39]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[39]["positive"] + "\\nTotal Negative Cases: " + covid_csv[39]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[39]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Pennsylvania: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[41]["positiveIncrease"]))
::Model(us_states["features"][17])

Pennsylvania_Details_Box: (IsHovering(Pennsylvania)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[41]["positiveIncrease"]))
::Model("rect")


Pennsylvania_Details_Text: (IsHovering(Pennsylvania)):
::Translate("Pennsylvania Covid Stats \\n" + "Total Test Results: " + covid_csv[41]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[41]["positive"] + "\\nTotal Negative Cases: " + covid_csv[41]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[41]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Tennessee: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[46]["positiveIncrease"]))
::Model(us_states["features"][18])

Tennessee_Details_Box: (IsHovering(Tennessee)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[46]["positiveIncrease"]))
::Model("rect")


Tennessee_Details_Text: (IsHovering(Tennessee)):
::Translate("Tennessee Covid Stats \\n" + "Total Test Results: " + covid_csv[46]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[46]["positive"] + "\\nTotal Negative Cases: " + covid_csv[46]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[46]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Virginia: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[50]["positiveIncrease"]))
::Model(us_states["features"][19])

Virginia_Details_Box: (IsHovering(Virginia)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[50]["positiveIncrease"]))
::Model("rect")


Virginia_Details_Text: (IsHovering(Virginia)):
::Translate("Virginia Covid Stats \\n" + "Total Test Results: " + covid_csv[50]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[50]["positive"] + "\\nTotal Negative Cases: " + covid_csv[50]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[50]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


PuertoRico: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[42]["positiveIncrease"]))
::Model(us_states["features"][20])

PuertoRico_Details_Box: (IsHovering(PuertoRico)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[42]["positiveIncrease"]))
::Model("rect")


PuertoRico_Details_Text: (IsHovering(PuertoRico)):
::Translate("PuertoRico Covid Stats \\n" + "Total Test Results: " + covid_csv[42]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[42]["positive"] + "\\nTotal Negative Cases: " + covid_csv[42]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[42]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Delaware: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[9]["positiveIncrease"]))
::Model(us_states["features"][21])

Delaware_Details_Box: (IsHovering(Delaware)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[9]["positiveIncrease"]))
::Model("rect")


Delaware_Details_Text: (IsHovering(Delaware)):
::Translate("Delaware Covid Stats \\n" + "Total Test Results: " + covid_csv[9]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[9]["positive"] + "\\nTotal Negative Cases: " + covid_csv[9]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[9]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


WestVirginia: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[54]["positiveIncrease"]))
::Model(us_states["features"][22])

WestVirginia_Details_Box: (IsHovering(WestVirginia)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[54]["positiveIncrease"]))
::Model("rect")


WestVirginia_Details_Text: (IsHovering(WestVirginia)):
::Translate("WestVirginia Covid Stats \\n" + "Total Test Results: " + covid_csv[54]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[54]["positive"] + "\\nTotal Negative Cases: " + covid_csv[54]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[54]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Wisconsin: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[54]["positiveIncrease"]))
::Model(us_states["features"][23])

Wisconsin_Details_Box: (IsHovering(Wisconsin)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[54]["positiveIncrease"]))
::Model("rect")


Wisconsin_Details_Text: (IsHovering(Wisconsin)):
::Translate("Wisconsin Covid Stats \\n" + "Total Test Results: " + covid_csv[54]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[54]["positive"] + "\\nTotal Negative Cases: " + covid_csv[54]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[54]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Wyoming: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[55]["positiveIncrease"]))
::Model(us_states["features"][24])

Wyoming_Details_Box: (IsHovering(Wyoming)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[55]["positiveIncrease"]))
::Model("rect")


Wyoming_Details_Text: (IsHovering(Wyoming)):
::Translate("Wyoming Covid Stats \\n" + "Total Test Results: " + covid_csv[55]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[55]["positive"] + "\\nTotal Negative Cases: " + covid_csv[55]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[55]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Alabama: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[1]["positiveIncrease"]))
::Model(us_states["features"][25])

Alabama_Details_Box: (IsHovering(Alabama)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[1]["positiveIncrease"]))
::Model("rect")


Alabama_Details_Text: (IsHovering(Alabama)):
::Translate("Alabama Covid Stats \\n" + "Total Test Results: " + covid_csv[1]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[1]["positive"] + "\\nTotal Negative Cases: " + covid_csv[1]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[1]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Alaska: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[0]["positiveIncrease"]))
::Model(us_states["features"][26])

Alaska_Details_Box: (IsHovering(Alaska)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[0]["positiveIncrease"]))
::Model("rect")


Alaska_Details_Text: (IsHovering(Alaska)):
::Translate("Alaska Covid Stats \\n" + "Total Test Results: " + covid_csv[0]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[0]["positive"] + "\\nTotal Negative Cases: " + covid_csv[0]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[0]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Florida: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[10]["positiveIncrease"]))
::Model(us_states["features"][27])

Florida_Details_Box: (IsHovering(Florida)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[10]["positiveIncrease"]))
::Model("rect")


Florida_Details_Text: (IsHovering(Florida)):
::Translate("Florida Covid Stats \\n" + "Total Test Results: " + covid_csv[10]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[10]["positive"] + "\\nTotal Negative Cases: " + covid_csv[10]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[10]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Idaho: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[15]["positiveIncrease"]))
::Model(us_states["features"][28])

Idaho_Details_Box: (IsHovering(Idaho)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[15]["positiveIncrease"]))
::Model("rect")


Idaho_Details_Text: (IsHovering(Idaho)):
::Translate("Idaho Covid Stats \\n" + "Total Test Results: " + covid_csv[15]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[15]["positive"] + "\\nTotal Negative Cases: " + covid_csv[15]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[15]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Kansas: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[18]["positiveIncrease"]))
::Model(us_states["features"][29])

Kansas_Details_Box: (IsHovering(Kansas)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[18]["positiveIncrease"]))
::Model("rect")


Kansas_Details_Text: (IsHovering(Kansas)):
::Translate("Kansas Covid Stats \\n" + "Total Test Results: " + covid_csv[18]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[18]["positive"] + "\\nTotal Negative Cases: " + covid_csv[18]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[18]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Maryland: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[22]["positiveIncrease"]))
::Model(us_states["features"][30])

Maryland_Details_Box: (IsHovering(Maryland)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[22]["positiveIncrease"]))
::Model("rect")


Maryland_Details_Text: (IsHovering(Maryland)):
::Translate("Maryland Covid Stats \\n" + "Total Test Results: " + covid_csv[22]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[22]["positive"] + "\\nTotal Negative Cases: " + covid_csv[22]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[22]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


NewJersey: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[34]["positiveIncrease"]))
::Model(us_states["features"][31])

NewJersey_Details_Box: (IsHovering(NewJersey)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[34]["positiveIncrease"]))
::Model("rect")


NewJersey_Details_Text: (IsHovering(NewJersey)):
::Translate("NewJersey Covid Stats \\n" + "Total Test Results: " + covid_csv[34]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[34]["positive"] + "\\nTotal Negative Cases: " + covid_csv[34]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[34]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


NorthCarolina: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[30]["positiveIncrease"]))
::Model(us_states["features"][32])

NorthCarolina_Details_Box: (IsHovering(NorthCarolina)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[30]["positiveIncrease"]))
::Model("rect")


NorthCarolina_Details_Text: (IsHovering(NorthCarolina)):
::Translate("NorthCarolina Covid Stats \\n" + "Total Test Results: " + covid_csv[30]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[30]["positive"] + "\\nTotal Negative Cases: " + covid_csv[30]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[30]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


SouthCarolina: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[44]["positiveIncrease"]))
::Model(us_states["features"][33])

SouthCarolina_Details_Box: (IsHovering(SouthCarolina)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[44]["positiveIncrease"]))
::Model("rect")


SouthCarolina_Details_Text: (IsHovering(SouthCarolina)):
::Translate("SouthCarolina Covid Stats \\n" + "Total Test Results: " + covid_csv[44]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[44]["positive"] + "\\nTotal Negative Cases: " + covid_csv[44]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[44]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Washington: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[52]["positiveIncrease"]))
::Model(us_states["features"][34])

Washington_Details_Box: (IsHovering(Washington)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[52]["positiveIncrease"]))
::Model("rect")


Washington_Details_Text: (IsHovering(Washington)):
::Translate("Washington Covid Stats \\n" + "Total Test Results: " + covid_csv[52]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[52]["positive"] + "\\nTotal Negative Cases: " + covid_csv[52]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[52]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Vermont: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[51]["positiveIncrease"]))
::Model(us_states["features"][35])

Vermont_Details_Box: (IsHovering(Vermont)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[51]["positiveIncrease"]))
::Model("rect")


Vermont_Details_Text: (IsHovering(Vermont)):
::Translate("Vermont Covid Stats \\n" + "Total Test Results: " + covid_csv[51]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[51]["positive"] + "\\nTotal Negative Cases: " + covid_csv[51]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[51]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Utah: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[48]["positiveIncrease"]))
::Model(us_states["features"][36])

Utah_Details_Box: (IsHovering(Utah)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[48]["positiveIncrease"]))
::Model("rect")


Utah_Details_Text: (IsHovering(Utah)):
::Translate("Utah Covid Stats \\n" + "Total Test Results: " + covid_csv[48]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[48]["positive"] + "\\nTotal Negative Cases: " + covid_csv[48]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[48]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Iowa: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[14]["positiveIncrease"]))
::Model(us_states["features"][37])

Iowa_Details_Box: (IsHovering(Iowa)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[14]["positiveIncrease"]))
::Model("rect")


Iowa_Details_Text: (IsHovering(Iowa)):
::Translate("Iowa Covid Stats \\n" + "Total Test Results: " + covid_csv[14]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[14]["positive"] + "\\nTotal Negative Cases: " + covid_csv[14]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[14]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Kentucky: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[19]["positiveIncrease"]))
::Model(us_states["features"][38])

Kentucky_Details_Box: (IsHovering(Kentucky)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[19]["positiveIncrease"]))
::Model("rect")


Kentucky_Details_Text: (IsHovering(Kentucky)):
::Translate("Kentucky Covid Stats \\n" + "Total Test Results: " + covid_csv[19]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[19]["positive"] + "\\nTotal Negative Cases: " + covid_csv[19]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[19]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Maine: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[23]["positiveIncrease"]))
::Model(us_states["features"][39])

Maine_Details_Box: (IsHovering(Maine)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[23]["positiveIncrease"]))
::Model("rect")


Maine_Details_Text: (IsHovering(Maine)):
::Translate("Maine Covid Stats \\n" + "Total Test Results: " + covid_csv[23]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[23]["positive"] + "\\nTotal Negative Cases: " + covid_csv[23]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[23]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Massachusetts: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[21]["positiveIncrease"]))
::Model(us_states["features"][40])

Massachusetts_Details_Box: (IsHovering(Massachusetts)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[21]["positiveIncrease"]))
::Model("rect")


Massachusetts_Details_Text: (IsHovering(Massachusetts)):
::Translate("Massachusetts Covid Stats \\n" + "Total Test Results: " + covid_csv[21]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[21]["positive"] + "\\nTotal Negative Cases: " + covid_csv[21]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[21]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Michigan: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[24]["positiveIncrease"]))
::Model(us_states["features"][41])

Michigan_Details_Box: (IsHovering(Michigan)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[24]["positiveIncrease"]))
::Model("rect")


Michigan_Details_Text: (IsHovering(Michigan)):
::Translate("Michigan Covid Stats \\n" + "Total Test Results: " + covid_csv[24]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[24]["positive"] + "\\nTotal Negative Cases: " + covid_csv[24]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[24]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Missouri: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[26]["positiveIncrease"]))
::Model(us_states["features"][42])

Missouri_Details_Box: (IsHovering(Missouri)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[26]["positiveIncrease"]))
::Model("rect")


Missouri_Details_Text: (IsHovering(Missouri)):
::Translate("Missouri Covid Stats \\n" + "Total Test Results: " + covid_csv[26]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[26]["positive"] + "\\nTotal Negative Cases: " + covid_csv[26]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[26]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Nebraska: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[32]["positiveIncrease"]))
::Model(us_states["features"][43])

Nebraska_Details_Box: (IsHovering(Nebraska)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[32]["positiveIncrease"]))
::Model("rect")


Nebraska_Details_Text: (IsHovering(Nebraska)):
::Translate("Nebraska Covid Stats \\n" + "Total Test Results: " + covid_csv[32]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[32]["positive"] + "\\nTotal Negative Cases: " + covid_csv[32]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[32]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Nevada: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[36]["positiveIncrease"]))
::Model(us_states["features"][44])

Nevada_Details_Box: (IsHovering(Nevada)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[36]["positiveIncrease"]))
::Model("rect")


Nevada_Details_Text: (IsHovering(Nevada)):
::Translate("Nevada Covid Stats \\n" + "Total Test Results: " + covid_csv[36]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[36]["positive"] + "\\nTotal Negative Cases: " + covid_csv[36]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[36]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


NewHampshire: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[33]["positiveIncrease"]))
::Model(us_states["features"][45])

NewHampshire_Details_Box: (IsHovering(NewHampshire)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[33]["positiveIncrease"]))
::Model("rect")


NewHampshire_Details_Text: (IsHovering(NewHampshire)):
::Translate("NewHampshire Covid Stats \\n" + "Total Test Results: " + covid_csv[33]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[33]["positive"] + "\\nTotal Negative Cases: " + covid_csv[33]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[33]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


NewYork: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[37]["positiveIncrease"]))
::Model(us_states["features"][46])

NewYork_Details_Box: (IsHovering(NewYork)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[37]["positiveIncrease"]))
::Model("rect")


NewYork_Details_Text: (IsHovering(NewYork)):
::Translate("NewYork Covid Stats \\n" + "Total Test Results: " + covid_csv[37]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[37]["positive"] + "\\nTotal Negative Cases: " + covid_csv[37]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[37]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Ohio: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[38]["positiveIncrease"]))
::Model(us_states["features"][47])

Ohio_Details_Box: (IsHovering(Ohio)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[38]["positiveIncrease"]))
::Model("rect")


Ohio_Details_Text: (IsHovering(Ohio)):
::Translate("Ohio Covid Stats \\n" + "Total Test Results: " + covid_csv[38]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[38]["positive"] + "\\nTotal Negative Cases: " + covid_csv[38]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[38]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Oregon: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[40]["positiveIncrease"]))
::Model(us_states["features"][48])

Oregon_Details_Box: (IsHovering(Oregon)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[40]["positiveIncrease"]))
::Model("rect")


Oregon_Details_Text: (IsHovering(Oregon)):
::Translate("Oregon Covid Stats \\n" + "Total Test Results: " + covid_csv[40]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[40]["positive"] + "\\nTotal Negative Cases: " + covid_csv[40]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[40]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


RhodeIsland: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[43]["positiveIncrease"]))
::Model(us_states["features"][49])

RhodeIsland_Details_Box: (IsHovering(RhodeIsland)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[43]["positiveIncrease"]))
::Model("rect")


RhodeIsland_Details_Text: (IsHovering(RhodeIsland)):
::Translate("RhodeIsland Covid Stats \\n" + "Total Test Results: " + covid_csv[43]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[43]["positive"] + "\\nTotal Negative Cases: " + covid_csv[43]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[43]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


SouthDakota: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[45]["positiveIncrease"]))
::Model(us_states["features"][50])

SouthDakota_Details_Box: (IsHovering(SouthDakota)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[45]["positiveIncrease"]))
::Model("rect")


SouthDakota_Details_Text: (IsHovering(SouthDakota)):
::Translate("SouthDakota Covid Stats \\n" + "Total Test Results: " + covid_csv[45]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[45]["positive"] + "\\nTotal Negative Cases: " + covid_csv[45]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[45]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")


Texas: default:
::Translate(400, 250)
::Color(PositiveCasesToColor(covid_csv[47]["positiveIncrease"]))
::Model(us_states["features"][51])

Texas_Details_Box: (IsHovering(Texas)):
::Translate(300, 10)
::Scale(200, 75)
::Color(PositiveCasesToColor(covid_csv[47]["positiveIncrease"]))
::Model("rect")


Texas_Details_Text: (IsHovering(Texas)):
::Translate("Texas Covid Stats \\n" + "Total Test Results: " + covid_csv[47]["totalTestResults"] + "\\nTotal Positive Cases: " + covid_csv[47]["positive"] + "\\nTotal Negative Cases: " + covid_csv[47]["negative"] + "\\n\\nPositive Case Increase: " + covid_csv[47]["positiveIncrease"], 320, 20)
::Scale(200, 75)
::Color(0, 0, 0)
::Model("text")



`
