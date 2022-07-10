gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDScore_95TextObjects1= [];
gdjs.Game_32OverCode.GDScore_95TextObjects2= [];
gdjs.Game_32OverCode.GDScoreObjects1= [];
gdjs.Game_32OverCode.GDScoreObjects2= [];
gdjs.Game_32OverCode.GDRestart_95ButtonObjects1= [];
gdjs.Game_32OverCode.GDRestart_95ButtonObjects2= [];
gdjs.Game_32OverCode.GDBGObjects1= [];
gdjs.Game_32OverCode.GDBGObjects2= [];
gdjs.Game_32OverCode.GDTitleObjects1= [];
gdjs.Game_32OverCode.GDTitleObjects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Game_32OverCode.GDScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.Game_32OverCode.GDTitleObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDScoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}{gdjs.evtTools.network.sendAsyncRequest("", "", "", "", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}{for(var i = 0, len = gdjs.Game_32OverCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDTitleObjects1[i].getBehavior("Tween").addObjectPositionYTween("", 110, "easeInOutQuad", 600, false);
}
}{runtimeScene.getGame().getVariables().get("ChopCounter").setNumber(2);
}{for(var i = 0, len = gdjs.Game_32OverCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDScoreObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.Game_32OverCode.GDScoreObjects1[i].getWidth()) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart_Button"), gdjs.Game_32OverCode.GDRestart_95ButtonObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32OverCode.GDRestart_95ButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDRestart_95ButtonObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Game_32OverCode.condition0IsTrue_0.val = true;
        gdjs.Game_32OverCode.GDRestart_95ButtonObjects1[k] = gdjs.Game_32OverCode.GDRestart_95ButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDRestart_95ButtonObjects1.length = k;}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Score").setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame", false);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDScore_95TextObjects1.length = 0;
gdjs.Game_32OverCode.GDScore_95TextObjects2.length = 0;
gdjs.Game_32OverCode.GDScoreObjects1.length = 0;
gdjs.Game_32OverCode.GDScoreObjects2.length = 0;
gdjs.Game_32OverCode.GDRestart_95ButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDRestart_95ButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDBGObjects1.length = 0;
gdjs.Game_32OverCode.GDBGObjects2.length = 0;
gdjs.Game_32OverCode.GDTitleObjects1.length = 0;
gdjs.Game_32OverCode.GDTitleObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
