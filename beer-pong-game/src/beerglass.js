
function BeerGlasses(glassPositions, width, height, image) {
    for (var i = 0; i < glassPositions.length; i++) {

        var molecule = new ImageSurface({
            size: [width, height]
        });
        molecule.setContent(image);
      
        molecule.body = new Circle({
            radius: 50,
            mass: 2
        });

        physicsEngine.addBody(molecule.body);

        physicsEngine.attach(collision, moleculeBodies, molecule.body);

        moleculeBodies.push(molecule.body);

        var stateModifier = new StateModifier({
            transform: Transform.translate(glassPositions[i][0],glassPositions[i][1],glassPositions[i][2])
        });

        view.add(stateModifier).add(molecule);
    }
}

BeerGlasses.prototype.addCollisions = function() {

    for (var i = 0; i < moleculeBodies.length; i++) {
        b1 = moleculeBodies[i];
        if ((i + 1) < moleculeBodies.length) {
            for (var j = i + 1; j < moleculeBodies.length; j++) {
                b2 = moleculeBodies[j];
                physicsEngine.attach(collision, b1, b2);
            }
        }
    }
};

BeerGlasses.prototype.addBodyTransform = function() {
    gravity.applyForce(this);
    return this.getTransform();
};
