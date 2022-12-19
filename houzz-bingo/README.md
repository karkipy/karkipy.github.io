### Canvas Boiler Plate

This project is a simple empty skeleton for canvas games in html5. The main drive for this project is minimum use of asset re initalization and to provide efficency in rendering those said assets( images specifically).


Core Files:

1) Resource.js:

      This contains the resource for the game such as the canvas and its context object which will be used throughout the game. It will contain other resource such as loadedImages and loadedSounds which will be constants and will be populated in loader.js file. The variables here will play as the core resource for any game.



2) Indicator.js:

      Each element is unquie in a game. Indicator will be linked with a player. Such that PLAYER_INDICATOR will be used further in game to call the resource such as images and sounds to be called only for these said specific game element. <b> getUniqueIndicator() </b> gives the elment a uniqueIndicator rather than assuming/ assigning indicator a unique value one can do this. Example :

      ```javascript
        const SPRITE_INDICATOR = getUniqueIndicator();
      ```

3) Constant.js:

      Here we will initalize assets such as images and sounds and provide them with id : Indicator for that element and the source for that asset. We will also include screen width and screen height for clearAll function to be used later on in game. Example :

      ```javascript
        const SCREEN_WIDTH =  800;
        const SCREEN_HEIGHT = 600;

        const IMAGES = [
          { id: SPRITE_INDICATOR, src : 'images/player.png' },
        ];

        const SOUNDS = [
          { id: SPRITE_INDICATOR, src : 'sounds/hurricaneKick.wav' },
        ];
      ```
      These will be called within the game by using the same indicator assigned to them.

4) Helper.js:

    Helper has functions that are Image and Sound helper.


      a) getSpriteObject : returns an object which is used by spriteRenderer to render the image.
      Params are explained here:

      ![screen shot 2018-12-05 at 2 15 03 pm](https://user-images.githubusercontent.com/12614476/49500186-330ce280-f898-11e8-8314-c53867d2e536.png)

      b) updateSpritePosition: params = (spriteDimension , x, y), to update x and y in canvas later on so as to animate the sprite.

      c) playAudio: params = indicator, the indicator defined in Indicator.js

      d) stopAudio: params = indicator, the indicator defiend in Indicator.js

5) SpriteRenderer.js:

      A single function that renders the image,

      params :  SpriteRenderer(image, dimensions)

          image : the image object that will be inialized and can be called from loadedImages[Indicator],

          dimensions: the dimension that you get from getSpriteObject



6) MapConstant.js:

      We map the sprite for an element here, again we will be assign the indicator so that to call the same dimension. Example:

    ```javascript
        const MAP_IMAGE = {
          [SPRITE_INDICATOR]: [getSpriteObject(0,0,10,10, 0, 0, 10, 10)],
        }

    ```
    Define an array for animation and just to display static image define assign a single value

7) game.js:

    Contains all the game object such as player or enemy or even background with it's indicator as a inital param, other contents are initAll, clearAll and mainLoop

    initAll: the function where you call setImage function for all the initaited object, to set the image for said object.

    clearAll: a function that is a must for mainLoop to clear previously rendered sprites

    mainLoop: which is the function that will continually run after all assets are loaded.

8) input.js:

    Contains the input handler for the game such as canvas mouse hover, canvas click and onkey press
    events.


9) loader.js:

    Contains onload function where you load the image and sound which is initalized with it's indicator to the loadedImages and loadedSounds and after loading all the assets calls the mainloop function of game.js


Example to animate ryu :


https://medium.com/@aashish.y2z/using-canvas-boiler-plate-fdbde0478f77

Output :


![ezgif-2-2e1eea23a4cc](https://user-images.githubusercontent.com/12614476/49582328-d33c3780-f97c-11e8-9d0e-9e7f57efe380.gif)

