gdjs.BeginCode = {};
gdjs.BeginCode.GDScore_95TextObjects1= [];
gdjs.BeginCode.GDScore_95TextObjects2= [];
gdjs.BeginCode.GDScoreObjects1= [];
gdjs.BeginCode.GDScoreObjects2= [];
gdjs.BeginCode.GDStartGameObjects1= [];
gdjs.BeginCode.GDStartGameObjects2= [];
gdjs.BeginCode.GDBGObjects1= [];
gdjs.BeginCode.GDBGObjects2= [];
gdjs.BeginCode.GDTitleObjects1= [];
gdjs.BeginCode.GDTitleObjects2= [];

gdjs.BeginCode.conditionTrue_0 = {val:false};
gdjs.BeginCode.condition0IsTrue_0 = {val:false};
gdjs.BeginCode.condition1IsTrue_0 = {val:false};


gdjs.BeginCode.eventsList0 = function(runtimeScene) {

{


gdjs.BeginCode.condition0IsTrue_0.val = false;
{
gdjs.BeginCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.BeginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.BeginCode.GDScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.BeginCode.GDTitleObjects1);
{for(var i = 0, len = gdjs.BeginCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.BeginCode.GDScoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}{gdjs.evtTools.network.sendAsyncRequest("", "", "", "", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}{for(var i = 0, len = gdjs.BeginCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.BeginCode.GDTitleObjects1[i].getBehavior("Tween").addObjectPositionYTween("", 110, "easeInOutQuad", 600, false);
}
}{for(var i = 0, len = gdjs.BeginCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.BeginCode.GDScoreObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.BeginCode.GDScoreObjects1[i].getWidth()) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartGame"), gdjs.BeginCode.GDStartGameObjects1);

gdjs.BeginCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BeginCode.GDStartGameObjects1.length;i<l;++i) {
    if ( gdjs.BeginCode.GDStartGameObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.BeginCode.condition0IsTrue_0.val = true;
        gdjs.BeginCode.GDStartGameObjects1[k] = gdjs.BeginCode.GDStartGameObjects1[i];
        ++k;
    }
}
gdjs.BeginCode.GDStartGameObjects1.length = k;}if (gdjs.BeginCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Score").setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame", false);
}}

}


};

gdjs.BeginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BeginCode.GDScore_95TextObjects1.length = 0;
gdjs.BeginCode.GDScore_95TextObjects2.length = 0;
gdjs.BeginCode.GDScoreObjects1.length = 0;
gdjs.BeginCode.GDScoreObjects2.length = 0;
gdjs.BeginCode.GDStartGameObjects1.length = 0;
gdjs.BeginCode.GDStartGameObjects2.length = 0;
gdjs.BeginCode.GDBGObjects1.length = 0;
gdjs.BeginCode.GDBGObjects2.length = 0;
gdjs.BeginCode.GDTitleObjects1.length = 0;
gdjs.BeginCode.GDTitleObjects2.length = 0;

gdjs.BeginCode.eventsList0(runtimeScene);
return;

}

gdjs['BeginCode'] = gdjs.BeginCode;
