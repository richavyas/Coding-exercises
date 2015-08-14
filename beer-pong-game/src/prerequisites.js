var Engine;
var Surface;
var Modifier;
var Transform;
var Transitionable;
var StateModifier;
var View;
var ImageSurface;
var Easing;
var MouseSync;
var SnapTransition;
var GenericSync;
var MouseSync;
var TouchSync;
var ballModifier;
var WallTransition;
var PhysicsEngine;
var Body;
var Circle;
var Collision;
var Wall;
var Walls;
var Vector;
var EventHandler;
var Force;
var Draggable;

define(function(require, exports, module) {
    Engine  = require("famous/core/Engine");
    Surface = require("famous/core/Surface");
    Modifier = require('famous/core/Modifier');
    Transform = require('famous/core/Transform');
    EventHandler    = require('famous/core/EventHandler');
    Transitionable = require('famous/transitions/Transitionable');
    StateModifier = require('famous/modifiers/StateModifier');
    View = require('famous/core/View');
    ImageSurface = require('famous/surfaces/ImageSurface');

    Draggable = require('famous/modifiers/Draggable');
    PhysicsEngine = require('famous/physics/PhysicsEngine');
    Body = require('famous/physics/bodies/Body');
    Circle = require('famous/physics/bodies/Circle');
    Force = require('famous/physics/forces/Force');
    Collision = require('famous/physics/constraints/Collision');
    Wall = require('famous/physics/constraints/Wall');
    Walls = require('famous/physics/constraints/Walls');
    Vector = require('famous/math/Vector');

    Easing = require('famous/transitions/Easing');
    MouseSync  = require("famous/inputs/MouseSync");

    SnapTransition = require("famous/transitions/SnapTransition");
	Transitionable.registerMethod("snap", SnapTransition);

	GenericSync = require("famous/inputs/GenericSync");
	MouseSync   = require("famous/inputs/MouseSync");
	TouchSync   = require("famous/inputs/TouchSync");

	WallTransition = require("famous/transitions/WallTransition");

});