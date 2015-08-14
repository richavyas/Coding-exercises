function PongBall(width,height,radius,transforPositions) {

    Transitionable.registerMethod('snap', SnapTransition);

    dragger = new Surface({
        size: [width, height],
        properties: {
        backgroundColor: 'lightblue',
        border: '1px solid blue',
        borderRadius: '20px'
        }
    });

    var draggerBody = new Circle({radius: 20});

    physicsEngine.addBody(draggerBody);

    var draggable = new Draggable({
        xRange: [-220, 2200],
        yRange: [-220, 2200]
    });

    draggable.setPosition(transforPositions);
    dragger.pipe(draggable);

    var mod = new StateModifier();

    var original = draggable.getPosition();
    
    var trans = {
        method: 'snap',
        period: 300,
        dampingRatio: 0.3,
        velocity: 0
    };

    dragger.on('mouseup', function() {
        var x = Math.floor(Math.random() * (200)) + 600;
        draggable.setPosition([x,150,0], trans);
        setTimeout(function(){draggable.setPosition([705,480,0])}, 2000);
    });

    physicsEngine.attach(collision, moleculeBodies, draggerBody);

    view.add(mod).add(draggable).add(dragger);
}
