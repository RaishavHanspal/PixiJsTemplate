import * as PIXI from "pixi.js";
import assets from "../assets.json";
declare global {
    var __PIXI_APP__: PIXI.Application
}
export async function initializeApp(): Promise<PIXI.Application> {
    const app = new PIXI.Application();
    globalThis.__PIXI_APP__ = app;
    await app.init();
    document.querySelector(".content")?.append(app.canvas);
    return app;
}

export async function loadAssets() {
    const promises: Array<Promise<any>> = [];
    assets.forEach((path) => {
        promises.push(PIXI.Assets.load(path));
    });
    await Promise.all(promises);
}

await Promise.all([initializeApp(), loadAssets()]).then(([app]) => {
    const pixiSprite = PIXI.Sprite.from("assets\\pixi.js.png");
    app.stage.addChild(pixiSprite);
});


