function changeTheme(theme) {

   
    if (theme === 'skeleton') {
        localStorage.setItem('theme', 'skeleton')
        document.body.setAttribute('data-theme', 'skeleton');
        console.log(theme)
        //reload page
        window.location.reload();

    } else if (theme === 'sahara'){
       
        localStorage.setItem('theme', 'sahara')
        document.body.setAttribute('data-theme', 'sahara');
       
        //reload page
        window.location.reload();
        console.log(theme)
    }
    else if (theme === 'modern'){
        localStorage.setItem('theme', 'modern')
        document.body.setAttribute('data-theme', 'modern');
        //reload page
        window.location.reload();
        console.log(theme)
    }
    else if (theme === 'rocket'){
        localStorage.setItem('theme', 'rocket')
        document.body.setAttribute('data-theme', 'rocket');
        //reload page
        window.location.reload();
        console.log(theme)
    }
    else if (theme === 'seafoam'){
        localStorage.setItem('theme', 'seafoam')
        document.body.setAttribute('data-theme', 'seafoam');
        //reload page
        window.location.reload();
        console.log(theme)
    }
    else if (theme === 'vintage'){
        localStorage.setItem('theme', 'vintage')
        document.body.setAttribute('data-theme', 'vintage');
        //reload page
        window.location.reload();
        console.log(theme)
    }
    else if (theme === 'hamlindigo'){
        localStorage.setItem('theme', 'hamlindigo')
        document.body.setAttribute('data-theme', 'hamlindigo');
        //reload page
        window.location.reload();
        console.log(theme)}
    else if (theme === 'crimson'){
        localStorage.setItem('theme', 'crimson')
        document.body.setAttribute('data-theme', 'crimson');
        //reload page
        window.location.reload();
        console.log(theme)
    }
    else if (theme === 'gold-nouveau'){
        localStorage.setItem('theme', 'gold-nouveau')
        document.body.setAttribute('data-theme', 'gold-nouveau');
        //reload page
        window.location.reload();
        console.log(theme)
    }
   


}

export default changeTheme;