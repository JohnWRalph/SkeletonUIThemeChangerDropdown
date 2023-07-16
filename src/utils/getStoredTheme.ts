
import "../app.postcss";


async function getStoredTheme() {
    //query local storage for theme
    const storedTheme = localStorage.getItem("theme");

    //add themes here
    if (storedTheme === "skeleton") {
        const module1 = await import(
            "@skeletonlabs/skeleton/themes/theme-skeleton.css"
        );
        document.body.setAttribute("data-theme", "skeleton");
        console.log("skeleton theme loaded")
        return "skeleton";
        //refresh page
    } else if (storedTheme === "sahara") {
        const module1 = await import(
            "@skeletonlabs/skeleton/themes/theme-sahara.css"
        );
        document.body.setAttribute("data-theme", "sahara");
        return storedTheme;
    } else if (storedTheme === "modern") {
        const module1 = await import(
            "@skeletonlabs/skeleton/themes/theme-modern.css"
        );
        document.body.setAttribute("data-theme", "modern");
        return storedTheme;
    } else if (storedTheme === "rocket") {
        const module1 = await import(
            "@skeletonlabs/skeleton/themes/theme-rocket.css"
        );
        document.body.setAttribute("data-theme", "rocket");
        return storedTheme;
    } else if (storedTheme === "seafoam") {
        const module1 = await import(
            '@skeletonlabs/skeleton/themes/theme-seafoam.css'
        );
        document.body.setAttribute("data-theme", "seafoam");
        return storedTheme;
    } else if (storedTheme === "vintage") {
        const module1 = await import(
            '@skeletonlabs/skeleton/themes/theme-vintage.css'
        );
        document.body.setAttribute("data-theme", "vintage");
        return storedTheme;
    } else if (storedTheme === "hamlindigo") {
        const module1 = await import(
            '@skeletonlabs/skeleton/themes/theme-hamlindigo.css'
        );
        document.body.setAttribute("data-theme", "hamlindigo");
        return storedTheme;
    } else if (storedTheme === "crimson") {
        const module1 = await import(
            '@skeletonlabs/skeleton/themes/theme-crimson.css'
        );
        document.body.setAttribute("data-theme", "crimson");
        return storedTheme;
    } else if (storedTheme === "gold-nouveau") {
        const module1 = await import(
            '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css'
        );
        document.body.setAttribute("data-theme", "gold-nouveau");
        return storedTheme;
    }
}

// This contains the bulk of Skeletons required styles:
//the docs suggest to import these in this order: theme first, then skeleton, then app
import "@skeletonlabs/skeleton/styles/skeleton.css";

// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import "../app.postcss";

export default getStoredTheme;