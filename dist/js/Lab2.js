let originalTable = [{ "name": "ABADDON", "attribute": "Intelligence", "role": "Hardlane", "releaseDate": "2020", "maxHp": "2000", "maxArmor": "24", "maxMana": "1024" },
{ "name": "ALCHEMIST", "attribute": "Strength", "role": "Midlane", "releaseDate": "2020", "maxHp": "1464", "maxArmor": "15", "maxMana": "1745" },
{ "name": "ANCIENT APPARITION", "attribute": "Agility", "role": "Hardlane", "releaseDate": "2011", "maxHp": "1491", "maxArmor": "20", "maxMana": "1142" },
{ "name": "ARC WARDEN", "attribute": "Strength", "role": "Support", "releaseDate": "2013", "maxHp": "2104", "maxArmor": "12", "maxMana": "1053" },
{ "name": "AXE", "attribute": "Agility", "role": "Midlane", "releaseDate": "2019", "maxHp": "1716", "maxArmor": "18", "maxMana": "1295" },
{ "name": "BANE", "attribute": "Intelligence", "role": "Midlane", "releaseDate": "2021", "maxHp": "2038", "maxArmor": "19", "maxMana": "1312" },
{ "name": "BATRIDER", "attribute": "Intelligence", "role": "Hardlane", "releaseDate": "2017", "maxHp": "1894", "maxArmor": "18", "maxMana": "1311" },
{ "name": "BEASTMASTER", "attribute": "Intelligence", "role": "Carry", "releaseDate": "2019", "maxHp": "1164", "maxArmor": "16", "maxMana": "2111" },
{ "name": "BLOODSEEKER", "attribute": "Intelligence", "role": "Support", "releaseDate": "2021", "maxHp": "1644", "maxArmor": "17", "maxMana": "1157" },
{ "name": "BOUNTY HUNTER", "attribute": "Strength", "role": "Hardlane", "releaseDate": "2021", "maxHp": "1741", "maxArmor": "14", "maxMana": "1678" },
{ "name": "BREWMASTER", "attribute": "Agility", "role": "Hardlane", "releaseDate": "2012", "maxHp": "1342", "maxArmor": "13", "maxMana": "1106" },
{ "name": "BRISTLEBACK", "attribute": "Agility", "role": "Midlane", "releaseDate": "2014", "maxHp": "1148", "maxArmor": "21", "maxMana": "1305" },
{ "name": "BROODMOTHER", "attribute": "Intelligence", "role": "Carry", "releaseDate": "2020", "maxHp": "1350", "maxArmor": "16", "maxMana": "2101" },
{ "name": "CENTAUR WARRUNNER", "attribute": "Strength", "role": "Support", "releaseDate": "2019", "maxHp": "1623", "maxArmor": "19", "maxMana": "1354" },
{ "name": "CHAOS KNIGHT", "attribute": "Strength", "role": "Support", "releaseDate": "2020", "maxHp": "2376", "maxArmor": "21", "maxMana": "1208" },
{ "name": "CHEN", "attribute": "Strength", "role": "Hardlane", "releaseDate": "2012", "maxHp": "1823", "maxArmor": "12", "maxMana": "1638" },
{ "name": "CLINKZ", "attribute": "Intelligence", "role": "Midlane", "releaseDate": "2019", "maxHp": "1041", "maxArmor": "13", "maxMana": "2115" },
{ "name": "CLOCKWERK", "attribute": "Agility", "role": "Midlane", "releaseDate": "2010", "maxHp": "1930", "maxArmor": "22", "maxMana": "1906" },
{ "name": "CRYSTAL MAIDEN", "attribute": "Intelligence", "role": "Midlane", "releaseDate": "2015", "maxHp": "1245", "maxArmor": "24", "maxMana": "1772" },
{ "name": "DRAGON KNIGHT", "attribute": "Strength", "role": "Carry", "releaseDate": "2015", "maxHp": "1573", "maxArmor": "22", "maxMana": "1812" },
{ "name": "DROW RANGER", "attribute": "Agility", "role": "Midlane", "releaseDate": "2015", "maxHp": "1636", "maxArmor": "15", "maxMana": "967" },
{ "name": "EARTH SPIRIT", "attribute": "Strength", "role": "Midlane", "releaseDate": "2021", "maxHp": "1052", "maxArmor": "15", "maxMana": "2050" },
{ "name": "EARTHSHAKER", "attribute": "Strength", "role": "Support", "releaseDate": "2020", "maxHp": "1430", "maxArmor": "22", "maxMana": "1191" },
{ "name": "ELDER TITAN", "attribute": "Agility", "role": "Carry", "releaseDate": "2011", "maxHp": "1287", "maxArmor": "13", "maxMana": "2183" },
{ "name": "EMBER SPIRIT", "attribute": "Intelligence", "role": "Carry", "releaseDate": "2011", "maxHp": "1758", "maxArmor": "21", "maxMana": "1288" },
{ "name": "ENCHANTRESS", "attribute": "Intelligence", "role": "Midlane", "releaseDate": "2012", "maxHp": "2030", "maxArmor": "13", "maxMana": "1468" },
{ "name": "ENIGMA", "attribute": "Strength", "role": "Hardlane", "releaseDate": "2016", "maxHp": "1155", "maxArmor": "20", "maxMana": "2059" },
{ "name": "FACELESS VOID", "attribute": "Strength", "role": "Carry", "releaseDate": "2018", "maxHp": "1483", "maxArmor": "20", "maxMana": "1041" },
{ "name": "GRIMSTROKE", "attribute": "Intelligence", "role": "Midlane", "releaseDate": "2017", "maxHp": "1836", "maxArmor": "24", "maxMana": "1520" },
{ "name": "GYROCOPTER", "attribute": "Strength", "role": "Carry", "releaseDate": "2010", "maxHp": "1699", "maxArmor": "13", "maxMana": "1984" },
{ "name": "HOODWINK", "attribute": "Agility", "role": "Midlane", "releaseDate": "2015", "maxHp": "1499", "maxArmor": "13", "maxMana": "1538" },
{ "name": "HUSKAR", "attribute": "Strength", "role": "Support", "releaseDate": "2017", "maxHp": "1467", "maxArmor": "18", "maxMana": "1493" },
{ "name": "IO", "attribute": "Strength", "role": "Hardlane", "releaseDate": "2021", "maxHp": "1921", "maxArmor": "10", "maxMana": "1017" },
{ "name": "JAKIRO", "attribute": "Agility", "role": "Midlane", "releaseDate": "2015", "maxHp": "1116", "maxArmor": "15", "maxMana": "1451" },
{ "name": "JUGGERNAUT", "attribute": "Intelligence", "role": "Carry", "releaseDate": "2017", "maxHp": "1056", "maxArmor": "23", "maxMana": "1303" },
{ "name": "KEEPER OF THE LIGHT", "attribute": "Intelligence", "role": "Support", "releaseDate": "2010", "maxHp": "2109", "maxArmor": "14", "maxMana": "1102" },
{ "name": "KUNKKA", "attribute": "Strength", "role": "Carry", "releaseDate": "2019", "maxHp": "1843", "maxArmor": "23", "maxMana": "1187" },
{ "name": "LEGION COMMANDER", "attribute": "Agility", "role": "Hardlane", "releaseDate": "2018", "maxHp": "2200", "maxArmor": "13", "maxMana": "1018" },
{ "name": "LESHRAC", "attribute": "Strength", "role": "Support", "releaseDate": "2012", "maxHp": "1281", "maxArmor": "24", "maxMana": "2198" },
{ "name": "MARCI", "attribute": "Agility", "role": "Carry", "releaseDate": "2010", "maxHp": "2122", "maxArmor": "23", "maxMana": "1492" },
{ "name": "MARS", "attribute": "Intelligence", "role": "Hardlane", "releaseDate": "2020", "maxHp": "2157", "maxArmor": "18", "maxMana": "1891" },
{ "name": "MEDUSA", "attribute": "Strength", "role": "Support", "releaseDate": "2014", "maxHp": "2011", "maxArmor": "12", "maxMana": "934" },
{ "name": "MEEPO", "attribute": "Intelligence", "role": "Hardlane", "releaseDate": "2010", "maxHp": "1146", "maxArmor": "17", "maxMana": "1886" },
{ "name": "MIRANA", "attribute": "Intelligence", "role": "Carry", "releaseDate": "2011", "maxHp": "1642", "maxArmor": "19", "maxMana": "1016" },
{ "name": "MONKEY KING", "attribute": "Intelligence", "role": "Midlane", "releaseDate": "2012", "maxHp": "1651", "maxArmor": "11", "maxMana": "1399" },
{ "name": "NECROPHOS", "attribute": "Intelligence", "role": "Support", "releaseDate": "2014", "maxHp": "1389", "maxArmor": "15", "maxMana": "1212" },
{ "name": "NIGHT STALKER", "attribute": "Intelligence", "role": "Midlane", "releaseDate": "2013", "maxHp": "2369", "maxArmor": "21", "maxMana": "1288" },
{ "name": "VOID SPIRIT", "attribute": "Strength", "role": "Carry", "releaseDate": "2013", "maxHp": "2423", "maxArmor": "17", "maxMana": "1085" },
{ "name": "WARLOCK", "attribute": "Intelligence", "role": "Carry", "releaseDate": "2014", "maxHp": "2426", "maxArmor": "22", "maxMana": "1257" },
{ "name": "WEAVER", "attribute": "Agility", "role": "Support", "releaseDate": "2015", "maxHp": "1654", "maxArmor": "21", "maxMana": "1189" },
{ "name": "WINDRANGER", "attribute": "Intelligence", "role": "Carry", "releaseDate": "2014", "maxHp": "1192", "maxArmor": "15", "maxMana": "1055" },
{ "name": "WINTER WYVERN", "attribute": "Intelligence", "role": "Carry", "releaseDate": "2011", "maxHp": "1512", "maxArmor": "20", "maxMana": "2060" },
{ "name": "WITCH DOCTOR", "attribute": "Agility", "role": "Carry", "releaseDate": "2021", "maxHp": "1423", "maxArmor": "14", "maxMana": "2196" },
{ "name": "WRAITH KING", "attribute": "Agility", "role": "Carry", "releaseDate": "2011", "maxHp": "1937", "maxArmor": "16", "maxMana": "2149" },
{ "name": "ZEUS", "attribute": "Agility", "role": "Hardlane", "releaseDate": "2019", "maxHp": "1916", "maxArmor": "21", "maxMana": "1405" }
];



function filter() {
    let nameInput = document.getElementById('nameInput')
    let attributeInput = document.getElementById('attributeInput')
    let roleInput = document.getElementById('roleInput')
    let hpFrom = document.getElementById('hpFrom')
    let hpTo = document.getElementById('hpTo')
    let armorFrom = document.getElementById('armorFrom')
    let armorTo = document.getElementById('armorTo')
    let manaFrom = document.getElementById('manaFrom')
    let manaTo = document.getElementById('manaTo')
    let table = document.getElementById("myTable");
    while (table.firstChild)
        table.removeChild(table.firstChild);
    let head = document.createElement('tr');
    let name = head.insertCell();
    name.appendChild(document.createTextNode("Hero name"));
    name = head.insertCell();
    name.appendChild(document.createTextNode("Main attribute"));
    name = head.insertCell();
    name.appendChild(document.createTextNode("Main role"));
    name = head.insertCell();
    name.appendChild(document.createTextNode("Release date"));
    name = head.insertCell();
    name.appendChild(document.createTextNode("Max hp"));
    name = head.insertCell();
    name.appendChild(document.createTextNode("Max armor"));
    name = head.insertCell();
    name.appendChild(document.createTextNode("Max mana"));
    table.appendChild(head);

    let firstLevel = document.getElementById("1sortOption");
    let secondLevel = document.getElementById('2sortOption');
    let thirdLevel = document.getElementById("3sortOption");
    const transformation = {
        "1": "name",
        "2": "attribute",
        "3": "role",
        "4": "releaseDate",
        "5": "maxHp",
        "6": "maxArmor",
        "7": "maxMana",
    }

    let temping = originalTable.filter(function (elem) {
        return ((elem.name.toUpperCase().startsWith(nameInput.value.toUpperCase())) || (nameInput.value == ''))
            && ((elem.attribute.toUpperCase().startsWith(attributeInput.value.toUpperCase())) || (attributeInput.value == ''))
            && ((elem.role.toUpperCase().startsWith(roleInput.value.toUpperCase())) || (roleInput.value == ''))
            && ((Number(hpFrom.value) <= Number(elem.maxHp)) || hpFrom.value == "")
            && ((Number(elem.maxHp) <= Number(hpTo.value)) || hpTo.value == "")
            && ((Number(armorFrom.value) <= Number(elem.maxArmor)) || armorFrom.value == "")
            && ((Number(elem.maxArmor) <= Number(armorTo.value)) || armorTo.value == "")
            && ((Number(manaFrom.value) <= Number(elem.maxMana)) || manaFrom.value == "")
            && ((Number(elem.maxMana) <= Number(manaTo.value)) || manaTo.value == "");
    });
    temping.sort(function (elem1, elem2) {
        if (thirdLevel.value == "0") return false;
        else {
            if (!document.getElementById("L3CHECKBOX").checked) {
                return elem1[transformation[thirdLevel.value]].localeCompare(
                    elem2[transformation[thirdLevel.value]]);
            }
            else {
                return elem2[transformation[thirdLevel.value]].localeCompare(
                    elem1[transformation[thirdLevel.value]]);
            }
        }
    })
        .sort(function (elem1, elem2) {
            if (secondLevel.value == "0") return false;
            else {
                if (!document.getElementById("L2CHECKBOX").checked) {
                    return elem1[transformation[secondLevel.value]].localeCompare(
                        elem2[transformation[secondLevel.value]]);
                }
                else {
                    return elem2[transformation[secondLevel.value]].localeCompare(
                        elem1[transformation[secondLevel.value]]);
                }
            }
        })
        .sort(function (elem1, elem2) {
            if (firstLevel.value == "0") return false;
            else {
                if (!document.getElementById("L1CHECKBOX").checked) {
                    return elem1[transformation[firstLevel.value]].localeCompare(
                        elem2[transformation[firstLevel.value]]);
                }
                else {
                    return elem2[transformation[firstLevel.value]].localeCompare(
                        elem1[transformation[firstLevel.value]]);
                }
            }
        })
        .forEach(function (elem) {
            let tr = document.createElement('tr');
            let td = tr.insertCell();
            td.appendChild(document.createTextNode(elem.name));
            td = tr.insertCell();
            td.appendChild(document.createTextNode(elem.attribute));
            td = tr.insertCell();
            td.appendChild(document.createTextNode(elem.role));
            td = tr.insertCell();
            td.appendChild(document.createTextNode(elem.releaseDate));
            td = tr.insertCell();
            td.appendChild(document.createTextNode(elem.maxHp));
            td = tr.insertCell();
            td.appendChild(document.createTextNode(elem.maxArmor));
            td = tr.insertCell();
            td.appendChild(document.createTextNode(elem.maxMana));
            table.appendChild(tr);
        });
}

function clearTable() {
    let nameInput = document.getElementById('nameInput')
    let attributeInput = document.getElementById('attributeInput')
    let roleInput = document.getElementById('roleInput')
    let hpFrom = document.getElementById('hpFrom')
    let hpTo = document.getElementById('hpTo')
    let armorFrom = document.getElementById('armorFrom')
    let armorTo = document.getElementById('armorTo')
    let manaFrom = document.getElementById('manaFrom')
    let manaTo = document.getElementById('manaTo')
    let table = document.getElementById("myTable");
    nameInput.value = "";
    attributeInput.value = "";
    roleInput.value = "";
    hpFrom.value = "";
    hpTo.value = "";
    armorFrom.value = "";
    armorTo.value = "";
    manaFrom.value = "";
    manaTo.value = "";
    while (table.firstChild)
        table.removeChild(table.firstChild);
    let head = document.createElement('tr');
    let name = head.insertCell();
    name.appendChild(document.createTextNode("Hero name"));
    name = head.insertCell();
    name.appendChild(document.createTextNode("Main attribute"));
    name = head.insertCell();
    name.appendChild(document.createTextNode("Main role"));
    name = head.insertCell();
    name.appendChild(document.createTextNode("Release date"));
    name = head.insertCell();
    name.appendChild(document.createTextNode("Max hp"));
    name = head.insertCell();
    name.appendChild(document.createTextNode("Max armor"));
    name = head.insertCell();
    name.appendChild(document.createTextNode("Max mana"));
    table.appendChild(head);
    let firstLevel = document.getElementById("1sortOption");
    let secondLevel = document.getElementById('2sortOption');
    let thirdLevel = document.getElementById("3sortOption");
    const transformation = {
        "1": "name",
        "2": "attribute",
        "3": "role",
        "4": "releaseDate",
        "5": "maxHp",
        "6": "maxArmor",
        "7": "maxMana",
    }
    temping = originalTable;
    temping.sort(function (elem1, elem2) {
        if (thirdLevel.value == "0") return false;
        else {
            if (!document.getElementById("L3CHECKBOX").checked) {
                return elem1[transformation[thirdLevel.value]].localeCompare(
                    elem2[transformation[thirdLevel.value]]);
            }
            else {
                return elem2[transformation[thirdLevel.value]].localeCompare(
                    elem1[transformation[thirdLevel.value]]);
            }
        }
    })
        .sort(function (elem1, elem2) {
            if (secondLevel.value == "0") return false;
            else {
                if (!document.getElementById("L2CHECKBOX").checked) {
                    return elem1[transformation[secondLevel.value]].localeCompare(
                        elem2[transformation[secondLevel.value]]);
                }
                else {
                    return elem2[transformation[secondLevel.value]].localeCompare(
                        elem1[transformation[secondLevel.value]]);
                }
            }
        })
        .sort(function (elem1, elem2) {
            if (firstLevel.value == "0") return false;
            else {
                if (!document.getElementById("L1CHECKBOX").checked) {
                    return elem1[transformation[firstLevel.value]].localeCompare(
                        elem2[transformation[firstLevel.value]]);
                }
                else {
                    return elem2[transformation[firstLevel.value]].localeCompare(
                        elem1[transformation[firstLevel.value]]);
                }
            }
        })
        .forEach(function (elem) {
            let tr = document.createElement('tr');
            let td = tr.insertCell();
            td.appendChild(document.createTextNode(elem.name));
            td = tr.insertCell();
            td.appendChild(document.createTextNode(elem.attribute));
            td = tr.insertCell();
            td.appendChild(document.createTextNode(elem.role));
            td = tr.insertCell();
            td.appendChild(document.createTextNode(elem.releaseDate));
            td = tr.insertCell();
            td.appendChild(document.createTextNode(elem.maxHp));
            td = tr.insertCell();
            td.appendChild(document.createTextNode(elem.maxArmor));
            td = tr.insertCell();
            td.appendChild(document.createTextNode(elem.maxMana));
            table.appendChild(tr);
        });
}

function changedinput(ya) {
    let firstLevel = document.getElementById("1sortOption");
    let secondLevel = document.getElementById("2sortOption");
    let thirdLevel = document.getElementById("3sortOption");
    let permabans = [];
    permabans.push(firstLevel.value);
    permabans.push(thirdLevel.value);
    permabans.push(secondLevel.value);
    let toBAN = [firstLevel, secondLevel, thirdLevel];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < toBAN.length; ++j) {
            if (permabans.includes(toBAN[j].children[i].value)
                && toBAN[j].children[i].value != "0")
                toBAN[j].children[i].setAttribute("hidden", true);
            else
                toBAN[j].children[i].removeAttribute("hidden");
        }
    }
}

