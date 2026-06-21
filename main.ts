import { Plugin } from "obsidian";

export default class KosPortalPlugin extends Plugin {
  async onload() {
    console.log("KOS Portal loading");
  }

  onunload() {
    console.log("KOS Portal unloading");
  }
}
