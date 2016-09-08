import {    FieldScrollerBehavior,    FieldLabelBehavior} from 'field';import {    SystemKeyboard} from 'keyboard';

import {    foodContainer,
    foodContainer1,
    foodContainer2,
    foodContainer3,
    foodContainer4,
    foodContainer5,
    foodContainer6,
    foodContainer7,
    foodContainer8,
    foodContainer9,
    foodContainer10,
    foodContainer11,
    foodContainer12,
} from 'foodContainers';

import {    calContainer,
    calContainer1,
    calContainer2,
    calContainer3,
    calContainer4,
    calContainer5,
    calContainer6,
    calContainer7,
    calContainer8,
    calContainer9,
    calContainer10,
    calContainer11,
    calContainer12,
    calContainer13,} from 'calContainers';import {    VerticalScroller,    VerticalScrollbar,    TopScrollerShadow,    BottomScrollerShadow} from 'scroller';let nameInputSkin = new Skin({borders: {left: 2, right: 2, top: 2, bottom: 2 }, stroke: 'gray'});let fieldStyle = new Style({color: 'white', font: 'bold 24px', horizontal: 'left', vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5});let fieldHintStyle = new Style({color: '#aaa', font: '16x', horizontal: 'left', vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5});let whiteSkin = new Skin({fill: "white"});let fieldLabelSkin = new Skin({ fill: ['transparent', 'transparent', '#C0C0C0', '#acd473'] });let MyField = Container.template($ => ({     top: 50, width: 250, height: 36, skin: nameInputSkin, contents: [        Scroller($, {             left: 4, right: 4, top: 4, bottom: 4, active: true,             Behavior: FieldScrollerBehavior, clip: true,             contents: [                Label($, {                     left: 0, top: 0, bottom: 0, skin: fieldLabelSkin,                     style: fieldStyle, anchor: 'NAME',                    editable: true, string: $.name,                    Behavior: class extends FieldLabelBehavior {                        onUnfocused(label) {                            let data = this.data;                            data.name = label.string;                            label.container.hint.visible = (data.name.length == 0);                            new MessageWithObject("/saySomethingAndWait", data.name).invoke();                        }                    },                }),                Label($, {                    left: 4, right: 4, top: 4, bottom: 4, style: fieldHintStyle,                    string: $.placeholder, name: "hint"                }),            ]        })    ]}));

let MyField2 = Container.template($ => ({     top: 50, width: 250, height: 36, skin: nameInputSkin, contents: [        Scroller($, {             left: 4, right: 4, top: 4, bottom: 4, active: true,             Behavior: FieldScrollerBehavior, clip: true,             contents: [                Label($, {                     left: 0, top: 0, bottom: 0, skin: fieldLabelSkin,                     style: fieldStyle, anchor: 'NAME',                    editable: true, string: $.name,                    Behavior: class extends FieldLabelBehavior {                        onUnfocused(label) {                            let data = this.data;                            data.name = label.string;                            label.container.hint.visible = (data.name.length == 0);                            new MessageWithObject("/saySomethingAndWait2", data.name).invoke();                        }                    },                }),                Label($, {                    left: 4, right: 4, top: 4, bottom: 4, style: fieldHintStyle,                    string: $.placeholder, name: "hint"                }),            ]        })    ]}));let NavButton = Container.template($ => ({    active: true, top: 2, bottom: 2, right: 2, left: 2,    behavior: Behavior({        onCreate: function(content){            this.upSkin = new Skin({                  fill: "transparent",                   borders: {left: 1, right: 1, top: 1, bottom: 1},                   stroke: "white"                });            this.downSkin = new Skin({              fill: "#3AFF3E",               borders: {left: 1, right: 1, top: 1, bottom: 1},               stroke: "white"            });            content.skin = this.upSkin;        },        onTouchBegan: function(content){            content.skin = this.downSkin;        },        onTouchEnded: function(content){            content.skin = this.upSkin;
            trace(currentScreen.name + "\n");
            application.remove(currentScreen);  // Remove the old screen from the application            currentScreen = new $.nextScreen;  // Make the new screen            application.add(currentScreen);  // Add the new screen to the application        },    }),   contents: [      Label($, { top: 0, bottom: 0, left: 0, right: 0, style: new Style( { font: "15px", color:"white" } ),                  string: $.string })   ]}));let scrollContainer = Container.template($ => ({    top: 50, height:100, left: 10, right: 10,    skin: new Skin({ fill: "white" }),    contents: [        VerticalScroller($, {             active: true, top: 0, bottom: 0, clip: true,            contents: [                $.contentToScrollVertically,                VerticalScrollbar(),                 BottomScrollerShadow(),                ]                             })    ]}));

let scrollContainer2 = Container.template($ => ({    top: 50, height:100, left: 10, right: 10,    skin: new Skin({ fill: "white" }),    contents: [        VerticalScroller($, {             active: true, top: 0, bottom: 0, clip: true,            contents: [                $.contentToScrollVertically2,                VerticalScrollbar(),                 BottomScrollerShadow(),                ]                             })    ]}));
let contentToScrollVertically = new Column({     top: 0, left: 0, right: 0,     contents: [     	foodContainer, 
        foodContainer1,
        foodContainer2,
        foodContainer3,
        foodContainer4,
        foodContainer5,
        foodContainer6,
        foodContainer7,
        foodContainer8,
        foodContainer9,
        foodContainer10,
        foodContainer11,
        foodContainer12,    ],});

let contentToScrollVertically2 = new Column({     top: 0, left: 0, right: 0,     contents: [     	calContainer,
	    calContainer1,
	    calContainer2,
	    calContainer3,
	    calContainer4,
	    calContainer5,
	    calContainer6,
	    calContainer7,
	    calContainer8,
	    calContainer9,
	    calContainer10,
	    calContainer11,
	    calContainer12,
	    calContainer13,    ],});var Screen1Template = Column.template($ => ({    top: 0, bottom: 0 , left: 0, right: 0, width: 100, height: 30,    skin: new Skin({fill: "#262626"}),    contents: [      Label($, {           left: 0, right: 0, top: 5, height: 25, style: new Style( { font: "20px", color: "white" } ),          string: "Or You Could Eat..."       }),      Label($, {          left: 0, right: 0, top: 0, height: 15, style: new Style( { font: "15px", color: "#3AFF3E" } ),          string: "Check all foods with the same Calorie count"       }),      new scrollContainer({ contentToScrollVertically }),      new Line({ top: 10, bottom: 0, height: 30, left: 0, right: 0,      skin: new Skin({ fill: "black" }),      contents: [          new NavButton({ string: "Converter", nextScreen: MainContainerTemplateScreen1 }),          new NavButton({ string: "Counter", nextScreen: MainContainerTemplateScreen2 }),      ]    })   ]}));var Screen2Template = Column.template($ => ({   left: 0, right: 0, top: 0, bottom: 0, width: 100, height: 30,   skin: new Skin({fill: "#1c1c1c"}),   contents: [      Label($, {           left: 0, right: 0, top: 5, height: 25, style: new Style( { font: "20px", color: "white" } ),          string: "Or You Could Eat..."       }),      Label($, {          left: 0, right: 0, top: 0, height: 15, style: new Style( { font: "15px", color: "#3AFF3E" } ),          string: "Manually set your Calorie limit"       }),      new scrollContainer2({ contentToScrollVertically2 }),      new Line({ top: 10, bottom: 0, height: 30, left: 0, right: 0,      skin: new Skin({ fill: "black" }),      contents: [          new NavButton({ string: "Converter", nextScreen: MainContainerTemplateScreen1 }),          new NavButton({ string: "Counter", nextScreen: MainContainerTemplateScreen2 }),      ]    })   ],}));let MainContainerTemplateScreen1 = Container.template($ => ({
	name: "temp1",    left: 0, right: 0, top: 0, bottom: 0,     skin: whiteSkin, active: true,    contents: [        new Screen1Template(),        new MyField({name: "", placeholder: "Enter quantity followed by food item..."}),    ],    Behavior: class extends Behavior {        onTouchEnded(content) {            SystemKeyboard.hide();            content.focus();        }    }}));let MainContainerTemplateScreen2 = Container.template($ => ({
	name: "temp2",    left: 0, right: 0, top: 0, bottom: 0,     skin: whiteSkin, active: true,    contents: [        new Screen2Template(),        new MyField2({name: "", placeholder: "Enter # of Calories..."}),    ],    Behavior: class extends Behavior {        onTouchEnded(content) {            SystemKeyboard.hide();            content.focus();        }    }}));var currentScreen = new MainContainerTemplateScreen1();application.add(currentScreen);let foodCaloriesDict = {"plate,of,spaghetti" : 600, "plate,of,spaghetti" : 600, "banana" : 105, "bananas" : 105, "pop,tart" : 200, "pop,tarts" : 200, "big,mac" : 563,"big,macs" : 563, "medium,fries" : 365, "taco" : 189, "tacos" : 189, "slice,of,bread" : 79,"slices,of,bread" : 79, "chocolate,cake" : 350, "chocolate,cakes" : 350, "plate,of,pad,thai" : 889, "plates,of,pad,thai" : 889, "ihop,chorizo,fiesta,omelette" : 1990,"ihop,chorizo,fiesta,omelettes" : 1990, "harmless,coconut,water" : 120, "harmless,coconut,waters" : 120, "boba,milk,tea,with,grass,jelly" : 316, "boba,milk,teas,with,grass,jelly" : 316,"cup,of,black,coffee" : 5, "cups,of,black,coffee" : 5, "grande,caramel,frappuccino" : 420,"grande,caramel,frappuccinos" : 420}var convertedFoods = {};Handler.bind("/saySomethingAndWait", {    onInvoke: function(handler, message){      var quanityAndFood = message.requestObject;      if (quanityAndFood.length > 1){          trace(quanityAndFood + "\n");          var foodArray = quanityAndFood.split(" ");          trace(foodArray + "\n");          var quantity = foodArray[0]        foodArray.shift();                function toLower(str) { return str.toLowerCase(); };                foodArray = foodArray.map(toLower);        var totalCalories = foodCaloriesDict[foodArray] * quantity;            var seenFoods = new Set();       for (var k in foodCaloriesDict){        let curFoodCal = foodCaloriesDict[k];        if (curFoodCal != foodCaloriesDict[foodArray] && !seenFoods.has(curFoodCal)){          seenFoods.add(curFoodCal);          var convertedFoodAmount = Math.round((totalCalories/curFoodCal)*100)/100;          convertedFoods[k] = convertedFoodAmount;        }      }
        var keys = Object.keys(convertedFoods);
        foodContainer.label0.string =  Math.floor(convertedFoods[keys[0]]) + " " + keys[0].split(",").join(" ")+ " (1 more for " + Math.round((foodCaloriesDict[keys[0]] - ((convertedFoods[keys[0]] - Math.floor(convertedFoods[keys[0]])) * foodCaloriesDict[keys[0]]) )*100)/100 + " cals over)";
        foodContainer1.label0.string = Math.floor(convertedFoods[keys[1]]) + " " + keys[1].split(",").join(" ")+ " (1 more for " + Math.round((foodCaloriesDict[keys[1]] - ((convertedFoods[keys[1]] - Math.floor(convertedFoods[keys[1]])) * foodCaloriesDict[keys[1]]) )*100)/100 + " cals over)";
        foodContainer2.label0.string = Math.floor(convertedFoods[keys[2]]) + " " + keys[2].split(",").join(" ")+ " (1 more for " + Math.round((foodCaloriesDict[keys[2]] - ((convertedFoods[keys[2]] - Math.floor(convertedFoods[keys[2]])) * foodCaloriesDict[keys[2]]) )*100)/100 + " cals over)";
        foodContainer3.label0.string = Math.floor(convertedFoods[keys[3]]) + " " + keys[3].split(",").join(" ")+ " (1 more for " + Math.round((foodCaloriesDict[keys[3]] - ((convertedFoods[keys[3]] - Math.floor(convertedFoods[keys[3]])) * foodCaloriesDict[keys[3]]) )*100)/100 + " cals over)";
        foodContainer4.label0.string = Math.floor(convertedFoods[keys[4]]) + " " + keys[4].split(",").join(" ")+ " (1 more for " + Math.round((foodCaloriesDict[keys[4]] - ((convertedFoods[keys[4]] - Math.floor(convertedFoods[keys[4]])) * foodCaloriesDict[keys[4]]) )*100)/100 + " cals over)";
        foodContainer5.label0.string = Math.floor(convertedFoods[keys[5]]) + " " + keys[5].split(",").join(" ")+ " (1 more for " + Math.round((foodCaloriesDict[keys[5]] - ((convertedFoods[keys[5]] - Math.floor(convertedFoods[keys[5]])) * foodCaloriesDict[keys[5]]) )*100)/100 + " cals over)";
        foodContainer6.label0.string = Math.floor(convertedFoods[keys[6]]) + " " + keys[6].split(",").join(" ")+ " (1 more for " + Math.round((foodCaloriesDict[keys[6]] - ((convertedFoods[keys[6]] - Math.floor(convertedFoods[keys[6]])) * foodCaloriesDict[keys[6]]) )*100)/100 + " cals over)";
        foodContainer7.label0.string = Math.floor(convertedFoods[keys[7]]) + " " + keys[7].split(",").join(" ")+ " (1 more for " + Math.round((foodCaloriesDict[keys[7]] - ((convertedFoods[keys[7]] - Math.floor(convertedFoods[keys[7]])) * foodCaloriesDict[keys[7]]) )*100)/100 + " cals over)";
        foodContainer8.label0.string = Math.floor(convertedFoods[keys[8]]) + " " + keys[8].split(",").join(" ")+ " (1 more for " + Math.round((foodCaloriesDict[keys[8]] - ((convertedFoods[keys[8]] - Math.floor(convertedFoods[keys[8]])) * foodCaloriesDict[keys[8]]) )*100)/100 + " cals over)";
        foodContainer9.label0.string = Math.floor(convertedFoods[keys[9]]) + " " + keys[9].split(",").join(" ")+ " (1 more for " + Math.round((foodCaloriesDict[keys[9]] - ((convertedFoods[keys[9]] - Math.floor(convertedFoods[keys[9]])) * foodCaloriesDict[keys[9]]) )*100)/100 + " cals over)";
        foodContainer10.label0.string = Math.floor(convertedFoods[keys[10]]) + " " + keys[10].split(",").join(" ")+ " (1 more for " + Math.round((foodCaloriesDict[keys[10]] - ((convertedFoods[keys[10]] - Math.floor(convertedFoods[keys[10]])) * foodCaloriesDict[keys[10]]) )*100)/100 + " cals over)";
        foodContainer11.label0.string = Math.floor(convertedFoods[keys[11]]) + " " + keys[11].split(",").join(" ")+ " (1 more for " + Math.round((foodCaloriesDict[keys[11]] - ((convertedFoods[keys[11]] - Math.floor(convertedFoods[keys[11]])) * foodCaloriesDict[keys[11]]) )*100)/100 + " cals over)";
        foodContainer12.label0.string = Math.floor(convertedFoods[keys[12]]) + " " + keys[12].split(",").join(" ")+ " (1 more for " + Math.round((foodCaloriesDict[keys[12]] - ((convertedFoods[keys[12]] - Math.floor(convertedFoods[keys[12]])) * foodCaloriesDict[keys[12]]) )*100)/100 + " cals over)";
        
        handler.wait(100);      }    },    onComplete: function(handler, message) {        trace("I'm done!\n");    }});

var convertedFoods2 = {};

Handler.bind("/saySomethingAndWait2", {
	onInvoke: function(handler, message){
		var totalCalories = message.requestObject;
		var seenFoods = new Set(); 	      for (var k in foodCaloriesDict){	        let curFoodCal = foodCaloriesDict[k];	        if (!seenFoods.has(curFoodCal)){	          seenFoods.add(curFoodCal);	          var convertedFoodAmount = Math.round((totalCalories/curFoodCal)*100)/100;	          convertedFoods2[k] = convertedFoodAmount;	        }	      }
	      
	   var keys = Object.keys(convertedFoods2);
        calContainer.label0.string = convertedFoods2[keys[0]] + " " + keys[0].split(",").join(" ");
        calContainer1.label0.string = convertedFoods2[keys[1]] + " " + keys[1].split(",").join(" ");
        calContainer2.label0.string = convertedFoods2[keys[2]] + " " + keys[2].split(",").join(" ");
        calContainer3.label0.string = convertedFoods2[keys[3]] + " " + keys[3].split(",").join(" ");
        calContainer4.label0.string = convertedFoods2[keys[4]] + " " + keys[4].split(",").join(" ");
        calContainer5.label0.string = convertedFoods2[keys[5]] + " " + keys[5].split(",").join(" ");
        calContainer6.label0.string = convertedFoods2[keys[6]] + " " + keys[6].split(",").join(" ");
        calContainer7.label0.string = convertedFoods2[keys[7]] + " " + keys[7].split(",").join(" ");
        calContainer8.label0.string = convertedFoods2[keys[8]] + " " + keys[8].split(",").join(" ");
        calContainer9.label0.string = convertedFoods2[keys[9]] + " " + keys[9].split(",").join(" ");
        calContainer10.label0.string = convertedFoods2[keys[10]] + " " + keys[10].split(",").join(" ");
        calContainer11.label0.string = convertedFoods2[keys[11]] + " " + keys[11].split(",").join(" ");
        calContainer12.label0.string = convertedFoods2[keys[12]] + " " + keys[11].split(",").join(" ");
        calContainer13.label0.string = convertedFoods2[keys[13]] + " " + keys[13].split(",").join(" ");
        handler.wait(100);
	}
});