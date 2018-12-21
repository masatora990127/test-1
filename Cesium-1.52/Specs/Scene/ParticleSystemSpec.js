defineSuite([
        'Scene/ParticleSystem',
        'Core/Cartesian2',
        'Core/Cartesian3',
        'Core/Color',
        'Core/Matrix4',
        'Core/Resource',
        'Scene/CircleEmitter',
        'Scene/ParticleBurst',
        'Specs/createScene'
    ], function(
        ParticleSystem,
        Cartesian2,
        Cartesian3,
        Color,
        Matrix4,
        Resource,
        CircleEmitter,
        ParticleBurst,
        createScene) {
    'use strict';

    var scene;
    var greenImage;

    beforeAll(function() {
        scene = createScene();
        return Resource.fetchImage('./Data/Images/Green2x2.png').then(function(result) {
            greenImage = result;
        });
    });

    afterAll(function() {
        scene.destroyForSpecs();
    });

    it('default constructor', function() {
        var p = new ParticleSystem();
        expect(p.show).toEqual(true);
        expect(p.forces).toBeUndefined();
        expect(p.emitter).toBeDefined();
        expect(p.modelMatrix).toEqual(Matrix4.IDENTITY);
        expect(p.emitterModelMatrix).toEqual(Matrix4.IDENTITY);
        expect(p.startColor).toEqual(Color.WHITE);
        expect(p.endColor).toEqual(Color.WHITE);
        expect(p.startScale).toEqual(1.0);
        expect(p.endScale).toEqual(1.0);
        expect(p.emissionRate).toEqual(5.0);
        expect(p.bursts).toBeUndefined();
        expect(p.loop).toEqual(true);
        expect(p.minimumSpeed).toEqual(1.0);
        expect(p.maximumSpeed).toEqual(1.0);
        expect(p.minimumParticleLife).toEqual(5.0);
        expect(p.maximumParticleLife).toEqual(5.0);
        expect(p.minimumMass).toEqual(1.0);
        expect(p.maximumMass).toEqual(1.0);
        expect(p.image).toBeUndefined();
        expect(p.minimumImageSize.x).toEqual(1.0);
        expect(p.minimumImageSize.y).toEqual(1.0);
        expect(p.maximumImageSize.x).toEqual(1.0);
        expect(p.maximumImageSize.y).toEqual(1.0);
        expect(p.lifetime).toEqual(Number.MAX_VALUE);
        expect(p.complete).toBeDefined();
        expect(p.isComplete).toEqual(false);
    });

    it('constructor', function() {
        var options = {
            show : false,
            updateCallback : (function(p) { p.mass++; }),
            emitter : new CircleEmitter(10.0),
            modelMatrix : new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0),
            emitterModelMatrix : new Matrix4(10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0),
            startColor : Color.MAGENTA,
            endColor : Color.LAVENDAR_BLUSH,
            startScale : 19.0,
            endScale : 20.0,
            emissionRate : 21.0,
            bursts : [new ParticleBurst()],
            loop : false,
            minimumSpeed : 22.0,
            maximumSpeed : 23.0,
            minimumParticleLife : 24.0,
            maximumParticleLife : 25.0,
            minimumMass : 26.0,
            maximumMass : 27.0,
            image : 'url/to/image',
            minimumImageSize : new Cartesian2(28.0, 30.0),
            maximumImageSize : new Cartesian2(29.0, 31.0),
            lifetime : 32.0
        };
        var p = new ParticleSystem(options);
        expect(p.show).toEqual(options.show);
        expect(p.updateCallback).toEqual(options.updateCallback);
        expect(p.emitter).toEqual(options.emitter);
        expect(p.modelMatrix).toEqual(options.modelMatrix);
        expect(p.emitterModelMatrix).toEqual(options.emitterModelMatrix);
        expect(p.startColor).toEqual(options.startColor);
        expect(p.endColor).toEqual(options.endColor);
        expect(p.startScale).toEqual(options.startScale);
        expect(p.endScale).toEqual(options.endScale);
        expect(p.emissionRate).toEqual(options.emissionRate);
        expect(p.bursts).toEqual(options.bursts);
        expect(p.loop).toEqual(options.loop);
        expect(p.minimumSpeed).toEqual(options.minimumSpeed);
        expect(p.maximumSpeed).toEqual(options.maximumSpeed);
        expect(p.minimumParticleLife).toEqual(options.minimumParticleLife);
        expect(p.maximumParticleLife).toEqual(options.maximumParticleLife);
        expect(p.minimumMass).toEqual(options.minimumMass);
        expect(p.maximumMass).toEqual(options.maximumMass);
        expect(p.image).toEqual(options.image);
        expect(p.minimumImageSize).toEqual(options.minimumImageSize);
        expect(p.maximumImageSize).toEqual(options.maximumImageSize);
        expect(p.lifetime).toEqual(options.lifetime);
        expect(p.complete).toBeDefined();
        expect(p.isComplete).toEqual(false);
    });

    it('getters/setters', function() {
        var show = false;
        var forces = [function(p) { p.mass++; }];
        var emitter = new CircleEmitter(10.0);
        var modelMatrix = new Matrix4(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0);
        var emitterModelMatrix = new Matrix4(10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0);
        var startColor = Color.MAGENTA;
        var endColor = Color.LAVENDAR_BLUSH;
        var startScale = 19.0;
        var endScale = 20.0;
        var emissionRate = 21.0;
        var bursts = [new ParticleBurst()];
        var loop = false;
        var minimumSpeed = 22.0;
        var maximumSpeed = 23.0;
        var minimumParticleLife = 24.0;
        var maximumParticleLife = 25.0;
        var minimumMass = 26.0;
        var maximumMass = 27.0;
        var image = 'url/to/image';
        var minimumImageSize = new Cartesian2(28.0, 30.0);
        var maximumImageSize = new Cartesian2(29.0, 31.0);
        var lifetime = 32.0;

        var p = new ParticleSystem();
        p.show = show;
        p.forces = forces;
        p.emitter = emitter;
        p.modelMatrix = modelMatrix;
        p.emitterModelMatrix = emitterModelMatrix;
        p.startColor = startColor;
        p.endColor = endColor;
        p.startScale = startScale;
        p.endScale = endScale;
        p.emissionRate = emissionRate;
        p.bursts = bursts;
        p.loop = loop;
        p.minimumSpeed = minimumSpeed;
        p.maximumSpeed = maximumSpeed;
        p.minimumParticleLife = minimumParticleLife;
        p.maximumParticleLife = maximumParticleLife;
        p.minimumMass = minimumMass;
        p.maximumMass = maximumMass;
        p.image = image;
        p.minimumImageSize = Cartesian2.clone(minimumImageSize, new Cartesian2());
        p.maximumImageSize = Cartesian2.clone(maximumImageSize, new Cartesian2());
        p.lifetime = lifetime;

        expect(p.show).toEqual(show);
        expect(p.forces).toEqual(forces);
        expect(p.emitter).toEqual(emitter);
        expect(p.modelMatrix).toEqual(modelMatrix);
        expect(p.emitterModelMatrix).toEqual(emitterModelMatrix);
        expect(p.startColor).toEqual(startColor);
        expect(p.endColor).toEqual(endColor);
        expect(p.startScale).toEqual(startScale);
        expect(p.endScale).toEqual(endScale);
        expect(p.emissionRate).toEqual(emissionRate);
        expect(p.bursts).toEqual(bursts);
        expect(p.loop).toEqual(loop);
        expect(p.minimumSpeed).toEqual(minimumSpeed);
        expect(p.maximumSpeed).toEqual(maximumSpeed);
        expect(p.minimumParticleLife).toEqual(minimumParticleLife);
        expect(p.maximumParticleLife).toEqual(maximumParticleLife);
        expect(p.minimumMass).toEqual(minimumMass);
        expect(p.maximumMass).toEqual(maximumMass);
        expect(p.image).toEqual(image);
        expect(p.minimumImageSize).toEqual(minimumImageSize);
        expect(p.maximumImageSize).toEqual(maximumImageSize);
        expect(p.lifetime).toEqual(lifetime);
        expect(p.complete).toBeDefined();
        expect(p.isComplete).toEqual(false);
    });

    it('throws with invalid emitter', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.emitter = undefined;
        }).toThrowDeveloperError();
    });

    it('throws with invalid modelMatrix', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.modelMatrix = undefined;
        }).toThrowDeveloperError();
    });

    it('throws with invalid emitterModelMatrix', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.emitterModelMatrix = undefined;
        }).toThrowDeveloperError();
    });

    it('throws with invalid startColor', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.startColor = undefined;
        }).toThrowDeveloperError();
    });

    it('throws with invalid endColor', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.endColor = undefined;
        }).toThrowDeveloperError();
    });

    it('throws with invalid startScale', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.startScale = -1.0;
        }).toThrowDeveloperError();
    });

    it('throws with invalid endScale', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.endScale = -1.0;
        }).toThrowDeveloperError();
    });

    it('throws with invalid emissionRate', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.emissionRate = -1.0;
        }).toThrowDeveloperError();
    });

    it('throws with invalid minimumSpeed', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.minimumSpeed = -1.0;
        }).toThrowDeveloperError();
    });

    it('throws with invalid maximumSpeed', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.maximumSpeed = -1.0;
        }).toThrowDeveloperError();
    });

    it('throws with invalid minimumParticleLife', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.minimumParticleLife = -1.0;
        }).toThrowDeveloperError();
    });

    it('throws with invalid maximumParticleLife', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.maximumParticleLife = -1.0;
        }).toThrowDeveloperError();
    });

    it('throws with invalid minimumMass', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.minimumMass = -1.0;
        }).toThrowDeveloperError();
    });

    it('throws with invalid maximumMass', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.maximumMass = -1.0;
        }).toThrowDeveloperError();
    });

    it('throws with invalid minimumWidth', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.minimumImageSize = new Cartesian2(-1.0, 2.0);
        }).toThrowDeveloperError();
    });

    it('throws with invalid maximumWidth', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.maximumImageSize = new Cartesian2(-1.0, 2.0);
        }).toThrowDeveloperError();
    });

    it('throws with invalid minimumHeight', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.minimumImageSize = new Cartesian2(2.0, -1.0);
        }).toThrowDeveloperError();
    });

    it('throws with invalid maximumHeight', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.maximumImageSize = new Cartesian2(2.0, -1.0);
        }).toThrowDeveloperError();
    });

    it('throws with invalid lifetime', function() {
        var p = new ParticleSystem();
        expect(function() {
            p.lifetime = -1.0;
        }).toThrowDeveloperError();
    });

    it('renders', function() {
        scene.primitives.add(new ParticleSystem({
            image : greenImage,
            emitter : new CircleEmitter(1.0),
            emissoinRate : 10000,
            imageSize : new Cartesian2(100, 100)
        }));
        scene.camera.position = new Cartesian3(0.0, 0.0, 20.0);
        scene.camera.direction = new Cartesian3(0.0, 0.0, -1.0);
        scene.camera.up = Cartesian3.clone(Cartesian3.UNIT_Y);
        scene.camera.right = Cartesian3.clone(Cartesian3.UNIT_X);

        // no particles emitted at time 0
        scene.renderForSpecs();
        // billboard collection needs to create texture atlas
        scene.renderForSpecs();
        // finally render
        expect(scene).toRender([0, 255, 0, 255]);
    });

    it('isDestroyed', function() {
        var p = new ParticleSystem();
        expect(p.isDestroyed()).toEqual(false);
        p.destroy();
        expect(p.isDestroyed()).toEqual(true);
    });
});
