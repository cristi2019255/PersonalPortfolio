$(document).ready(()=>{
    $('.carousel')?.carousel({
        interval: 2000,
        pause:true,
        keyboard :true
    })

    setTheme($.cookie('theme'),false)

    $('#toggle-checkbox').on('change',()=>{
        setTheme($.cookie('theme'),true)
        document.body.classList.toggle('dark');
        $('.carousel').toggleClass('dark');
    })
})

function setTheme(theme,changerCookie){
    if (theme==='light'){
        if (changerCookie) {$.cookie('theme','dark')}
        document.body.classList.remove('dark');
        $('.carousel').removeClass('dark');
    }else{
        if (changerCookie) {$.cookie('theme','light')}
        document.body.classList.add('dark');
        $('.carousel').addClass('dark');
    }
}
