gdjs.MainGameCode = {};
gdjs.MainGameCode.GDLeftButtonObjects1= [];
gdjs.MainGameCode.GDLeftButtonObjects2= [];
gdjs.MainGameCode.GDLeftButtonObjects3= [];
gdjs.MainGameCode.GDLeftButtonObjects4= [];
gdjs.MainGameCode.GDLeftButtonObjects5= [];
gdjs.MainGameCode.GDDaureyObjects1= [];
gdjs.MainGameCode.GDDaureyObjects2= [];
gdjs.MainGameCode.GDDaureyObjects3= [];
gdjs.MainGameCode.GDDaureyObjects4= [];
gdjs.MainGameCode.GDDaureyObjects5= [];
gdjs.MainGameCode.GDBGObjects1= [];
gdjs.MainGameCode.GDBGObjects2= [];
gdjs.MainGameCode.GDBGObjects3= [];
gdjs.MainGameCode.GDBGObjects4= [];
gdjs.MainGameCode.GDBGObjects5= [];
gdjs.MainGameCode.GDForeGroundObjects1= [];
gdjs.MainGameCode.GDForeGroundObjects2= [];
gdjs.MainGameCode.GDForeGroundObjects3= [];
gdjs.MainGameCode.GDForeGroundObjects4= [];
gdjs.MainGameCode.GDForeGroundObjects5= [];
gdjs.MainGameCode.GDRightButtonObjects1= [];
gdjs.MainGameCode.GDRightButtonObjects2= [];
gdjs.MainGameCode.GDRightButtonObjects3= [];
gdjs.MainGameCode.GDRightButtonObjects4= [];
gdjs.MainGameCode.GDRightButtonObjects5= [];
gdjs.MainGameCode.GDTree1Objects1= [];
gdjs.MainGameCode.GDTree1Objects2= [];
gdjs.MainGameCode.GDTree1Objects3= [];
gdjs.MainGameCode.GDTree1Objects4= [];
gdjs.MainGameCode.GDTree1Objects5= [];
gdjs.MainGameCode.GDWoodChunksObjects1= [];
gdjs.MainGameCode.GDWoodChunksObjects2= [];
gdjs.MainGameCode.GDWoodChunksObjects3= [];
gdjs.MainGameCode.GDWoodChunksObjects4= [];
gdjs.MainGameCode.GDWoodChunksObjects5= [];
gdjs.MainGameCode.GDTree_95LeftObjects1= [];
gdjs.MainGameCode.GDTree_95LeftObjects2= [];
gdjs.MainGameCode.GDTree_95LeftObjects3= [];
gdjs.MainGameCode.GDTree_95LeftObjects4= [];
gdjs.MainGameCode.GDTree_95LeftObjects5= [];
gdjs.MainGameCode.GDTree_952xObjects1= [];
gdjs.MainGameCode.GDTree_952xObjects2= [];
gdjs.MainGameCode.GDTree_952xObjects3= [];
gdjs.MainGameCode.GDTree_952xObjects4= [];
gdjs.MainGameCode.GDTree_952xObjects5= [];
gdjs.MainGameCode.GDTree_95RightObjects1= [];
gdjs.MainGameCode.GDTree_95RightObjects2= [];
gdjs.MainGameCode.GDTree_95RightObjects3= [];
gdjs.MainGameCode.GDTree_95RightObjects4= [];
gdjs.MainGameCode.GDTree_95RightObjects5= [];
gdjs.MainGameCode.GDScore_95TextObjects1= [];
gdjs.MainGameCode.GDScore_95TextObjects2= [];
gdjs.MainGameCode.GDScore_95TextObjects3= [];
gdjs.MainGameCode.GDScore_95TextObjects4= [];
gdjs.MainGameCode.GDScore_95TextObjects5= [];
gdjs.MainGameCode.GDScoreObjects1= [];
gdjs.MainGameCode.GDScoreObjects2= [];
gdjs.MainGameCode.GDScoreObjects3= [];
gdjs.MainGameCode.GDScoreObjects4= [];
gdjs.MainGameCode.GDScoreObjects5= [];
gdjs.MainGameCode.GDTimer_95BarObjects1= [];
gdjs.MainGameCode.GDTimer_95BarObjects2= [];
gdjs.MainGameCode.GDTimer_95BarObjects3= [];
gdjs.MainGameCode.GDTimer_95BarObjects4= [];
gdjs.MainGameCode.GDTimer_95BarObjects5= [];
gdjs.MainGameCode.GDTimerObjects1= [];
gdjs.MainGameCode.GDTimerObjects2= [];
gdjs.MainGameCode.GDTimerObjects3= [];
gdjs.MainGameCode.GDTimerObjects4= [];
gdjs.MainGameCode.GDTimerObjects5= [];

gdjs.MainGameCode.conditionTrue_0 = {val:false};
gdjs.MainGameCode.condition0IsTrue_0 = {val:false};
gdjs.MainGameCode.condition1IsTrue_0 = {val:false};
gdjs.MainGameCode.condition2IsTrue_0 = {val:false};
gdjs.MainGameCode.conditionTrue_1 = {val:false};
gdjs.MainGameCode.condition0IsTrue_1 = {val:false};
gdjs.MainGameCode.condition1IsTrue_1 = {val:false};
gdjs.MainGameCode.condition2IsTrue_1 = {val:false};


gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDWoodChunksObjects1Objects = Hashtable.newFrom({"WoodChunks": gdjs.MainGameCode.GDWoodChunksObjects1});
gdjs.MainGameCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("ChopCounter")) > 0;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("ChopCounter").sub(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Materials\\WoodCrack.wav", false, 100, 1);
}}

}


};gdjs.MainGameCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Tree_2x"), gdjs.MainGameCode.GDTree_952xObjects3);
gdjs.copyArray(runtimeScene.getObjects("Tree_Left"), gdjs.MainGameCode.GDTree_95LeftObjects3);
gdjs.copyArray(runtimeScene.getObjects("Tree_Right"), gdjs.MainGameCode.GDTree_95RightObjects3);
{for(var i = 0, len = gdjs.MainGameCode.GDTree_95LeftObjects3.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_95LeftObjects3[i].setY(gdjs.MainGameCode.GDTree_95LeftObjects3[i].getY() + (550));
}
}{for(var i = 0, len = gdjs.MainGameCode.GDTree_95RightObjects3.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_95RightObjects3[i].setY(gdjs.MainGameCode.GDTree_95RightObjects3[i].getY() + (550));
}
}{for(var i = 0, len = gdjs.MainGameCode.GDTree_952xObjects3.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_952xObjects3[i].setY(gdjs.MainGameCode.GDTree_952xObjects3[i].getY() + (550));
}
}{runtimeScene.getGame().getVariables().get("Random").setNumber(gdjs.randomInRange(1, 3));
}}

}


};gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_9595LeftObjects4Objects = Hashtable.newFrom({"Tree_Left": gdjs.MainGameCode.GDTree_95LeftObjects4});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_9595LeftObjects4Objects = Hashtable.newFrom({"Tree_Left": gdjs.MainGameCode.GDTree_95LeftObjects4});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_9595RightObjects4Objects = Hashtable.newFrom({"Tree_Right": gdjs.MainGameCode.GDTree_95RightObjects4});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_9595RightObjects4Objects = Hashtable.newFrom({"Tree_Right": gdjs.MainGameCode.GDTree_95RightObjects4});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_95952xObjects3Objects = Hashtable.newFrom({"Tree_2x": gdjs.MainGameCode.GDTree_952xObjects3});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_95952xObjects3Objects = Hashtable.newFrom({"Tree_2x": gdjs.MainGameCode.GDTree_952xObjects3});
gdjs.MainGameCode.eventsList2 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Random")) == 1;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.MainGameCode.GDTree_95LeftObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_9595LeftObjects4Objects, 250, -(300), "");
}{runtimeScene.getGame().getVariables().get("Tree3").setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_9595LeftObjects4Objects));
}{for(var i = 0, len = gdjs.MainGameCode.GDTree_95LeftObjects4.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_95LeftObjects4[i].setSize(550, 550);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDTree_95LeftObjects4.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_95LeftObjects4[i].setZOrder(2);
}
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Random")) == 2;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.MainGameCode.GDTree_95RightObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_9595RightObjects4Objects, 250, -(300), "");
}{runtimeScene.getGame().getVariables().get("Tree3").setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_9595RightObjects4Objects));
}{for(var i = 0, len = gdjs.MainGameCode.GDTree_95RightObjects4.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_95RightObjects4[i].setSize(550, 550);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDTree_95RightObjects4.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_95RightObjects4[i].setZOrder(2);
}
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Random")) == 3;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.MainGameCode.GDTree_952xObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_95952xObjects3Objects, 250, -(300), "");
}{runtimeScene.getGame().getVariables().get("Tree3").setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_95952xObjects3Objects));
}{for(var i = 0, len = gdjs.MainGameCode.GDTree_952xObjects3.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_952xObjects3[i].setSize(550, 550);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDTree_952xObjects3.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_952xObjects3[i].setZOrder(3);
}
}}

}


};gdjs.MainGameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tree_2x"), gdjs.MainGameCode.GDTree_952xObjects3);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTree_952xObjects3.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTree_952xObjects3[i].getY() > 800 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDTree_952xObjects3[k] = gdjs.MainGameCode.GDTree_952xObjects3[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTree_952xObjects3.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDTree_952xObjects3 */
{for(var i = 0, len = gdjs.MainGameCode.GDTree_952xObjects3.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_952xObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tree_Left"), gdjs.MainGameCode.GDTree_95LeftObjects3);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTree_95LeftObjects3.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTree_95LeftObjects3[i].getY() > 800 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDTree_95LeftObjects3[k] = gdjs.MainGameCode.GDTree_95LeftObjects3[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTree_95LeftObjects3.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDTree_95LeftObjects3 */
{for(var i = 0, len = gdjs.MainGameCode.GDTree_95LeftObjects3.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_95LeftObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tree_Right"), gdjs.MainGameCode.GDTree_95RightObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTree_95RightObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTree_95RightObjects2[i].getY() > 800 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDTree_95RightObjects2[k] = gdjs.MainGameCode.GDTree_95RightObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTree_95RightObjects2.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDTree_95RightObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDTree_95RightObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_95RightObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.MainGameCode.eventsList4 = function(runtimeScene) {

{


gdjs.MainGameCode.eventsList1(runtimeScene);
}


{


gdjs.MainGameCode.eventsList2(runtimeScene);
}


{


gdjs.MainGameCode.eventsList3(runtimeScene);
}


};gdjs.MainGameCode.eventsList5 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
{gdjs.MainGameCode.conditionTrue_1 = gdjs.MainGameCode.condition0IsTrue_0;
gdjs.MainGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8328636);
}
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Materials\\AxeSwing.wav", false, 100, 1);
}
{ //Subevents
gdjs.MainGameCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.MainGameCode.eventsList6 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("ChopCounter")) == 0;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainGameCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.MainGameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainGameCode.GDDaureyObjects1, gdjs.MainGameCode.GDDaureyObjects3);

gdjs.copyArray(runtimeScene.getObjects("Tree_Left"), gdjs.MainGameCode.GDTree_95LeftObjects3);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDDaureyObjects3.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDDaureyObjects3[i].isFlippedX()) ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDDaureyObjects3[k] = gdjs.MainGameCode.GDDaureyObjects3[i];
        ++k;
    }
}
gdjs.MainGameCode.GDDaureyObjects3.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTree_95LeftObjects3.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTree_95LeftObjects3[i].getY() == 800 ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDTree_95LeftObjects3[k] = gdjs.MainGameCode.GDTree_95LeftObjects3[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTree_95LeftObjects3.length = k;}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Materials\\GameOver2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(gdjs.MainGameCode.GDDaureyObjects1, gdjs.MainGameCode.GDDaureyObjects3);

gdjs.copyArray(runtimeScene.getObjects("Tree_Right"), gdjs.MainGameCode.GDTree_95RightObjects3);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDDaureyObjects3.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDDaureyObjects3[i].isFlippedX() ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDDaureyObjects3[k] = gdjs.MainGameCode.GDDaureyObjects3[i];
        ++k;
    }
}
gdjs.MainGameCode.GDDaureyObjects3.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTree_95RightObjects3.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTree_95RightObjects3[i].getY() == 800 ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDTree_95RightObjects3[k] = gdjs.MainGameCode.GDTree_95RightObjects3[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTree_95RightObjects3.length = k;}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Materials\\GameOver2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(gdjs.MainGameCode.GDDaureyObjects1, gdjs.MainGameCode.GDDaureyObjects2);

gdjs.copyArray(runtimeScene.getObjects("Tree_2x"), gdjs.MainGameCode.GDTree_952xObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDDaureyObjects2.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDDaureyObjects2[i].isFlippedX()) ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDDaureyObjects2[k] = gdjs.MainGameCode.GDDaureyObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDDaureyObjects2.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTree_952xObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTree_952xObjects2[i].getY() == 800 ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDTree_952xObjects2[k] = gdjs.MainGameCode.GDTree_952xObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTree_952xObjects2.length = k;}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Materials\\GameOver2.wav", false, 100, 1);
}}

}


};gdjs.MainGameCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tree_2x"), gdjs.MainGameCode.GDTree_952xObjects3);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTree_952xObjects3.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTree_952xObjects3[i].getY() == 800 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDTree_952xObjects3[k] = gdjs.MainGameCode.GDTree_952xObjects3[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTree_952xObjects3.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("ChopCounter")) == 0;
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("ChopCounter").setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tree_2x"), gdjs.MainGameCode.GDTree_952xObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTree_952xObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTree_952xObjects2[i].getY() == 800 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDTree_952xObjects2[k] = gdjs.MainGameCode.GDTree_952xObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTree_952xObjects2.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("ChopCounter")) == 1;
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDTree_952xObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDTree_952xObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_952xObjects2[i].setAnimation(1);
}
}}

}


};gdjs.MainGameCode.eventsList9 = function(runtimeScene) {

{


gdjs.MainGameCode.eventsList8(runtimeScene);
}


};gdjs.MainGameCode.eventsList10 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.MainGameCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.MainGameCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDScoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}{runtimeScene.getGame().getVariables().get("Score").add(1);
}}

}


};gdjs.MainGameCode.eventsList11 = function(runtimeScene) {

{



}


{


gdjs.MainGameCode.eventsList0(runtimeScene);
}


{


gdjs.MainGameCode.eventsList6(runtimeScene);
}


{


gdjs.MainGameCode.eventsList7(runtimeScene);
}


{


gdjs.MainGameCode.eventsList9(runtimeScene);
}


{


gdjs.MainGameCode.eventsList10(runtimeScene);
}


};gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDWoodChunksObjects1Objects = Hashtable.newFrom({"WoodChunks": gdjs.MainGameCode.GDWoodChunksObjects1});
gdjs.MainGameCode.eventsList12 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("ChopCounter")) > 0;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("ChopCounter").sub(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Materials\\WoodCrack.wav", false, 100, 1);
}}

}


};gdjs.MainGameCode.eventsList13 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Tree_2x"), gdjs.MainGameCode.GDTree_952xObjects3);
gdjs.copyArray(runtimeScene.getObjects("Tree_Left"), gdjs.MainGameCode.GDTree_95LeftObjects3);
gdjs.copyArray(runtimeScene.getObjects("Tree_Right"), gdjs.MainGameCode.GDTree_95RightObjects3);
{for(var i = 0, len = gdjs.MainGameCode.GDTree_95LeftObjects3.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_95LeftObjects3[i].setY(gdjs.MainGameCode.GDTree_95LeftObjects3[i].getY() + (550));
}
}{for(var i = 0, len = gdjs.MainGameCode.GDTree_95RightObjects3.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_95RightObjects3[i].setY(gdjs.MainGameCode.GDTree_95RightObjects3[i].getY() + (550));
}
}{for(var i = 0, len = gdjs.MainGameCode.GDTree_952xObjects3.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_952xObjects3[i].setY(gdjs.MainGameCode.GDTree_952xObjects3[i].getY() + (550));
}
}{runtimeScene.getGame().getVariables().get("Random").setNumber(gdjs.randomInRange(1, 3));
}}

}


};gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_9595LeftObjects4Objects = Hashtable.newFrom({"Tree_Left": gdjs.MainGameCode.GDTree_95LeftObjects4});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_9595LeftObjects4Objects = Hashtable.newFrom({"Tree_Left": gdjs.MainGameCode.GDTree_95LeftObjects4});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_9595RightObjects4Objects = Hashtable.newFrom({"Tree_Right": gdjs.MainGameCode.GDTree_95RightObjects4});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_9595RightObjects4Objects = Hashtable.newFrom({"Tree_Right": gdjs.MainGameCode.GDTree_95RightObjects4});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_95952xObjects3Objects = Hashtable.newFrom({"Tree_2x": gdjs.MainGameCode.GDTree_952xObjects3});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_95952xObjects3Objects = Hashtable.newFrom({"Tree_2x": gdjs.MainGameCode.GDTree_952xObjects3});
gdjs.MainGameCode.eventsList14 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Random")) == 1;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.MainGameCode.GDTree_95LeftObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_9595LeftObjects4Objects, 250, -(300), "");
}{runtimeScene.getGame().getVariables().get("Tree3").setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_9595LeftObjects4Objects));
}{for(var i = 0, len = gdjs.MainGameCode.GDTree_95LeftObjects4.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_95LeftObjects4[i].setSize(550, 550);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDTree_95LeftObjects4.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_95LeftObjects4[i].setZOrder(2);
}
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Random")) == 2;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.MainGameCode.GDTree_95RightObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_9595RightObjects4Objects, 250, -(300), "");
}{runtimeScene.getGame().getVariables().get("Tree3").setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_9595RightObjects4Objects));
}{for(var i = 0, len = gdjs.MainGameCode.GDTree_95RightObjects4.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_95RightObjects4[i].setSize(550, 550);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDTree_95RightObjects4.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_95RightObjects4[i].setZOrder(2);
}
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Random")) == 3;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.MainGameCode.GDTree_952xObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_95952xObjects3Objects, 250, -(300), "");
}{runtimeScene.getGame().getVariables().get("Tree3").setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTree_95952xObjects3Objects));
}{for(var i = 0, len = gdjs.MainGameCode.GDTree_952xObjects3.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_952xObjects3[i].setSize(550, 550);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDTree_952xObjects3.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_952xObjects3[i].setZOrder(3);
}
}}

}


};gdjs.MainGameCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tree_2x"), gdjs.MainGameCode.GDTree_952xObjects3);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTree_952xObjects3.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTree_952xObjects3[i].getY() > 800 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDTree_952xObjects3[k] = gdjs.MainGameCode.GDTree_952xObjects3[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTree_952xObjects3.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDTree_952xObjects3 */
{for(var i = 0, len = gdjs.MainGameCode.GDTree_952xObjects3.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_952xObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tree_Left"), gdjs.MainGameCode.GDTree_95LeftObjects3);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTree_95LeftObjects3.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTree_95LeftObjects3[i].getY() > 800 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDTree_95LeftObjects3[k] = gdjs.MainGameCode.GDTree_95LeftObjects3[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTree_95LeftObjects3.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDTree_95LeftObjects3 */
{for(var i = 0, len = gdjs.MainGameCode.GDTree_95LeftObjects3.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_95LeftObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tree_Right"), gdjs.MainGameCode.GDTree_95RightObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTree_95RightObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTree_95RightObjects2[i].getY() > 800 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDTree_95RightObjects2[k] = gdjs.MainGameCode.GDTree_95RightObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTree_95RightObjects2.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDTree_95RightObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDTree_95RightObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_95RightObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.MainGameCode.eventsList16 = function(runtimeScene) {

{


gdjs.MainGameCode.eventsList13(runtimeScene);
}


{


gdjs.MainGameCode.eventsList14(runtimeScene);
}


{


gdjs.MainGameCode.eventsList15(runtimeScene);
}


};gdjs.MainGameCode.eventsList17 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
{gdjs.MainGameCode.conditionTrue_1 = gdjs.MainGameCode.condition0IsTrue_0;
gdjs.MainGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8328637);
}
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Materials\\AxeSwing.wav", false, 100, 1);
}
{ //Subevents
gdjs.MainGameCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.MainGameCode.eventsList18 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("ChopCounter")) == 0;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainGameCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.MainGameCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainGameCode.GDDaureyObjects1, gdjs.MainGameCode.GDDaureyObjects3);

gdjs.copyArray(runtimeScene.getObjects("Tree_Left"), gdjs.MainGameCode.GDTree_95LeftObjects3);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDDaureyObjects3.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDDaureyObjects3[i].isFlippedX()) ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDDaureyObjects3[k] = gdjs.MainGameCode.GDDaureyObjects3[i];
        ++k;
    }
}
gdjs.MainGameCode.GDDaureyObjects3.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTree_95LeftObjects3.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTree_95LeftObjects3[i].getY() == 800 ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDTree_95LeftObjects3[k] = gdjs.MainGameCode.GDTree_95LeftObjects3[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTree_95LeftObjects3.length = k;}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Materials\\GameOver2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(gdjs.MainGameCode.GDDaureyObjects1, gdjs.MainGameCode.GDDaureyObjects3);

gdjs.copyArray(runtimeScene.getObjects("Tree_Right"), gdjs.MainGameCode.GDTree_95RightObjects3);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDDaureyObjects3.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDDaureyObjects3[i].isFlippedX() ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDDaureyObjects3[k] = gdjs.MainGameCode.GDDaureyObjects3[i];
        ++k;
    }
}
gdjs.MainGameCode.GDDaureyObjects3.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTree_95RightObjects3.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTree_95RightObjects3[i].getY() == 800 ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDTree_95RightObjects3[k] = gdjs.MainGameCode.GDTree_95RightObjects3[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTree_95RightObjects3.length = k;}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Materials\\GameOver2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(gdjs.MainGameCode.GDDaureyObjects1, gdjs.MainGameCode.GDDaureyObjects2);

gdjs.copyArray(runtimeScene.getObjects("Tree_2x"), gdjs.MainGameCode.GDTree_952xObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDDaureyObjects2.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDDaureyObjects2[i].isFlippedX()) ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDDaureyObjects2[k] = gdjs.MainGameCode.GDDaureyObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDDaureyObjects2.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTree_952xObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTree_952xObjects2[i].getY() == 800 ) {
        gdjs.MainGameCode.condition1IsTrue_0.val = true;
        gdjs.MainGameCode.GDTree_952xObjects2[k] = gdjs.MainGameCode.GDTree_952xObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTree_952xObjects2.length = k;}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Materials\\GameOver2.wav", false, 100, 1);
}}

}


};gdjs.MainGameCode.eventsList20 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tree_2x"), gdjs.MainGameCode.GDTree_952xObjects3);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTree_952xObjects3.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTree_952xObjects3[i].getY() == 800 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDTree_952xObjects3[k] = gdjs.MainGameCode.GDTree_952xObjects3[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTree_952xObjects3.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("ChopCounter")) == 0;
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("ChopCounter").setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tree_2x"), gdjs.MainGameCode.GDTree_952xObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDTree_952xObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDTree_952xObjects2[i].getY() == 800 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDTree_952xObjects2[k] = gdjs.MainGameCode.GDTree_952xObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDTree_952xObjects2.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("ChopCounter")) == 1;
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDTree_952xObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDTree_952xObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDTree_952xObjects2[i].setAnimation(1);
}
}}

}


};gdjs.MainGameCode.eventsList21 = function(runtimeScene) {

{


gdjs.MainGameCode.eventsList20(runtimeScene);
}


};gdjs.MainGameCode.eventsList22 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.MainGameCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.MainGameCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDScoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}{runtimeScene.getGame().getVariables().get("Score").add(1);
}}

}


};gdjs.MainGameCode.eventsList23 = function(runtimeScene) {

{



}


{


gdjs.MainGameCode.eventsList12(runtimeScene);
}


{


gdjs.MainGameCode.eventsList18(runtimeScene);
}


{


gdjs.MainGameCode.eventsList19(runtimeScene);
}


{


gdjs.MainGameCode.eventsList21(runtimeScene);
}


{


gdjs.MainGameCode.eventsList22(runtimeScene);
}


};gdjs.MainGameCode.eventsList24 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.MainGameCode.GDLeftButtonObjects1);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDLeftButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDLeftButtonObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDLeftButtonObjects1[k] = gdjs.MainGameCode.GDLeftButtonObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDLeftButtonObjects1.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Daurey"), gdjs.MainGameCode.GDDaureyObjects1);
gdjs.MainGameCode.GDWoodChunksObjects1.length = 0;

{for(var i = 0, len = gdjs.MainGameCode.GDDaureyObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDDaureyObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDDaureyObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDDaureyObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDDaureyObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDDaureyObjects1[i].setX(210);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDWoodChunksObjects1Objects, 250, 950, "");
}{for(var i = 0, len = gdjs.MainGameCode.GDWoodChunksObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDWoodChunksObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDWoodChunksObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDWoodChunksObjects1[i].getBehavior("Tween").addObjectPositionXTween("", 1000, "linear", 200, true);
}
}
{ //Subevents
gdjs.MainGameCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.MainGameCode.GDRightButtonObjects1);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDRightButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDRightButtonObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDRightButtonObjects1[k] = gdjs.MainGameCode.GDRightButtonObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDRightButtonObjects1.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Daurey"), gdjs.MainGameCode.GDDaureyObjects1);
gdjs.MainGameCode.GDWoodChunksObjects1.length = 0;

{for(var i = 0, len = gdjs.MainGameCode.GDDaureyObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDDaureyObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDDaureyObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDDaureyObjects1[i].setX(480);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDDaureyObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDDaureyObjects1[i].flipX(true);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDWoodChunksObjects1Objects, 250, 950, "");
}{for(var i = 0, len = gdjs.MainGameCode.GDWoodChunksObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDWoodChunksObjects1[i].getBehavior("Tween").addObjectPositionXTween("", -(1000), "linear", 200, true);
}
}
{ //Subevents
gdjs.MainGameCode.eventsList23(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.MainGameCode.GDLeftButtonObjects1);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDLeftButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDLeftButtonObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDLeftButtonObjects1[k] = gdjs.MainGameCode.GDLeftButtonObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDLeftButtonObjects1.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = !(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") > 0);
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Timer_Bar"), gdjs.MainGameCode.GDTimer_95BarObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}{for(var i = 0, len = gdjs.MainGameCode.GDTimer_95BarObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDTimer_95BarObjects1[i].getBehavior("Tween").addObjectScaleXTween("Tween", 0, "linear", 15000, false, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.MainGameCode.GDRightButtonObjects1);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDRightButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDRightButtonObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDRightButtonObjects1[k] = gdjs.MainGameCode.GDRightButtonObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDRightButtonObjects1.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = !(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") > 0);
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Timer_Bar"), gdjs.MainGameCode.GDTimer_95BarObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}{for(var i = 0, len = gdjs.MainGameCode.GDTimer_95BarObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDTimer_95BarObjects1[i].getBehavior("Tween").addObjectScaleXTween("Tween", 0, "linear", 15000, false, false);
}
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") > 15;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Materials\\Hait Thakiyo.wav", false, 100, 1);
}}

}


};

gdjs.MainGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainGameCode.GDLeftButtonObjects1.length = 0;
gdjs.MainGameCode.GDLeftButtonObjects2.length = 0;
gdjs.MainGameCode.GDLeftButtonObjects3.length = 0;
gdjs.MainGameCode.GDLeftButtonObjects4.length = 0;
gdjs.MainGameCode.GDLeftButtonObjects5.length = 0;
gdjs.MainGameCode.GDDaureyObjects1.length = 0;
gdjs.MainGameCode.GDDaureyObjects2.length = 0;
gdjs.MainGameCode.GDDaureyObjects3.length = 0;
gdjs.MainGameCode.GDDaureyObjects4.length = 0;
gdjs.MainGameCode.GDDaureyObjects5.length = 0;
gdjs.MainGameCode.GDBGObjects1.length = 0;
gdjs.MainGameCode.GDBGObjects2.length = 0;
gdjs.MainGameCode.GDBGObjects3.length = 0;
gdjs.MainGameCode.GDBGObjects4.length = 0;
gdjs.MainGameCode.GDBGObjects5.length = 0;
gdjs.MainGameCode.GDForeGroundObjects1.length = 0;
gdjs.MainGameCode.GDForeGroundObjects2.length = 0;
gdjs.MainGameCode.GDForeGroundObjects3.length = 0;
gdjs.MainGameCode.GDForeGroundObjects4.length = 0;
gdjs.MainGameCode.GDForeGroundObjects5.length = 0;
gdjs.MainGameCode.GDRightButtonObjects1.length = 0;
gdjs.MainGameCode.GDRightButtonObjects2.length = 0;
gdjs.MainGameCode.GDRightButtonObjects3.length = 0;
gdjs.MainGameCode.GDRightButtonObjects4.length = 0;
gdjs.MainGameCode.GDRightButtonObjects5.length = 0;
gdjs.MainGameCode.GDTree1Objects1.length = 0;
gdjs.MainGameCode.GDTree1Objects2.length = 0;
gdjs.MainGameCode.GDTree1Objects3.length = 0;
gdjs.MainGameCode.GDTree1Objects4.length = 0;
gdjs.MainGameCode.GDTree1Objects5.length = 0;
gdjs.MainGameCode.GDWoodChunksObjects1.length = 0;
gdjs.MainGameCode.GDWoodChunksObjects2.length = 0;
gdjs.MainGameCode.GDWoodChunksObjects3.length = 0;
gdjs.MainGameCode.GDWoodChunksObjects4.length = 0;
gdjs.MainGameCode.GDWoodChunksObjects5.length = 0;
gdjs.MainGameCode.GDTree_95LeftObjects1.length = 0;
gdjs.MainGameCode.GDTree_95LeftObjects2.length = 0;
gdjs.MainGameCode.GDTree_95LeftObjects3.length = 0;
gdjs.MainGameCode.GDTree_95LeftObjects4.length = 0;
gdjs.MainGameCode.GDTree_95LeftObjects5.length = 0;
gdjs.MainGameCode.GDTree_952xObjects1.length = 0;
gdjs.MainGameCode.GDTree_952xObjects2.length = 0;
gdjs.MainGameCode.GDTree_952xObjects3.length = 0;
gdjs.MainGameCode.GDTree_952xObjects4.length = 0;
gdjs.MainGameCode.GDTree_952xObjects5.length = 0;
gdjs.MainGameCode.GDTree_95RightObjects1.length = 0;
gdjs.MainGameCode.GDTree_95RightObjects2.length = 0;
gdjs.MainGameCode.GDTree_95RightObjects3.length = 0;
gdjs.MainGameCode.GDTree_95RightObjects4.length = 0;
gdjs.MainGameCode.GDTree_95RightObjects5.length = 0;
gdjs.MainGameCode.GDScore_95TextObjects1.length = 0;
gdjs.MainGameCode.GDScore_95TextObjects2.length = 0;
gdjs.MainGameCode.GDScore_95TextObjects3.length = 0;
gdjs.MainGameCode.GDScore_95TextObjects4.length = 0;
gdjs.MainGameCode.GDScore_95TextObjects5.length = 0;
gdjs.MainGameCode.GDScoreObjects1.length = 0;
gdjs.MainGameCode.GDScoreObjects2.length = 0;
gdjs.MainGameCode.GDScoreObjects3.length = 0;
gdjs.MainGameCode.GDScoreObjects4.length = 0;
gdjs.MainGameCode.GDScoreObjects5.length = 0;
gdjs.MainGameCode.GDTimer_95BarObjects1.length = 0;
gdjs.MainGameCode.GDTimer_95BarObjects2.length = 0;
gdjs.MainGameCode.GDTimer_95BarObjects3.length = 0;
gdjs.MainGameCode.GDTimer_95BarObjects4.length = 0;
gdjs.MainGameCode.GDTimer_95BarObjects5.length = 0;
gdjs.MainGameCode.GDTimerObjects1.length = 0;
gdjs.MainGameCode.GDTimerObjects2.length = 0;
gdjs.MainGameCode.GDTimerObjects3.length = 0;
gdjs.MainGameCode.GDTimerObjects4.length = 0;
gdjs.MainGameCode.GDTimerObjects5.length = 0;

gdjs.MainGameCode.eventsList24(runtimeScene);
return;

}

gdjs['MainGameCode'] = gdjs.MainGameCode;
