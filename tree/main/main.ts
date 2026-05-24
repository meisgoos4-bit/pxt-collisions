namespace easyCollision {

    /**
     * Enables simple tile collision handling for a sprite.
     * @param sprite the sprite to apply collision to
     * @param repelForce optional push-out force when hitting walls
     */
    export function apply(sprite: Sprite, repelForce: number = 0) {

        game.onUpdate(function () {

            // LEFT
            if (sprite.isHittingTile(CollisionDirection.Left)) {
                if (sprite.vx < 0) sprite.vx = 0
                sprite.x += repelForce
            }

            // RIGHT
            if (sprite.isHittingTile(CollisionDirection.Right)) {
                if (sprite.vx > 0) sprite.vx = 0
                sprite.x -= repelForce
            }

            // BOTTOM (ground)
            if (sprite.isHittingTile(CollisionDirection.Bottom)) {
                if (sprite.vy > 0) sprite.vy = 0
            }

            // TOP (ceiling)
            if (sprite.isHittingTile(CollisionDirection.Top)) {
                if (sprite.vy < 0) sprite.vy = 0
            }
        })
    }
}
