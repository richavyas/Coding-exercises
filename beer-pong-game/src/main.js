

/* create context */
var mainContext = Engine.createContext();

/* create a view, may be required later for switching sides */
var view = new View();
var ViewModifier;

// Storing game state
var state = new Transitionable(0);

/* Attach all the objects to main context View */
mainContext.add(ViewModifier).add(view);

var physicsEngine = new PhysicsEngine();

/* Define Positions for Game Table*/
var origin = [0.5, 0.5];
var align = [0.5, 0.5];

var gravity = new Force([0, 0.0015, 0]);

/* Draw Game Table */
var gameTableObj = new DrawGameTable('img/table.png', origin, align, "Beer Pong Game");

var viewportWidth = $(window).width();
var viewportHeight = $(window).height();

$(window).resize(function() {
    viewportWidth = $(window).width();
    viewportHeight = $(window).height();
});

/* Define Glass Positions */
var glassPositions = [
    [(viewportWidth/2)-20, viewportHeight/2+13, 0],
    [(viewportWidth/2)-50, viewportHeight/2+33, 0],
    [(viewportWidth/2)+10, viewportHeight/2+33, 0],
    [(viewportWidth/2)-80, viewportHeight/2+53, 0],
    [(viewportWidth/2)-20, viewportHeight/2+53, 0],
    [(viewportWidth/2)+40, viewportHeight/2+53, 0],
    
    [(viewportWidth/2)-20, viewportHeight/2-197, 0],
    [(viewportWidth/2)-70, viewportHeight/2-197, 0],
    [(viewportWidth/2)+30, viewportHeight/2-197, 0],
    [(viewportWidth/2)-50, viewportHeight/2-177, 0],
    [(viewportWidth/2)+10, viewportHeight/2-177, 0],
    [(viewportWidth/2)-20, viewportHeight/2-157, 0]
];

var beerGlassBodies = [];
var moleculeBodies = [];
var collision = new Collision({restitution: 0});

/* Create beer glass objects */
var createGlassesInst = new BeerGlasses(glassPositions, '', '', 'img/beer-cup.png');
createGlassesInst.addCollisions();

/* Create a new Pong ball object */
var transformPos = [(viewportWidth/2)-15,(viewportHeight/2)+114,0];
var pongBallObj = new PongBall(40, 40, 20, transformPos);

