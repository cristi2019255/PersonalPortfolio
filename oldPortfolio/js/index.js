$(document).ready(()=>{
    var typer = document.getElementById('typewriter');

    setTheme($.cookie('theme'), false)
    $('#toggle-checkbox').on('change',()=>{
        setTheme($.cookie('theme'),true)
        document.body.classList.toggle('dark');
        document.getElementById('wave').classList.toggle('dark');
        document.querySelectorAll('#skills .card').forEach((item)=>item.classList.toggle('dark'));
    })

    typewriter = setupTypewriter(typewriter);

    typewriter.type();
})

function setupTypewriter(t) {
    var HTML = t.innerHTML;

    t.innerHTML = "";

    var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 20,
        tempTypeSpeed = 0;

    var type = function() {

        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === " ") {
                tempTypeSpeed = 0;
            }
            else {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }

    };

    return {
        type: type
    };
}

function setTheme(theme,changeCookie){
    if (theme==='light'){
        if (changeCookie) {$.cookie('theme','dark')}
        document.body.classList.remove('dark');
        document.getElementById('wave').classList.remove('dark');
        document.querySelectorAll('#skills .card').forEach((item)=>item.classList.remove('dark'));
    }else{
        if (changeCookie) {$.cookie('theme','light')}
        document.body.classList.add('dark');
        document.getElementById('wave').classList.add('dark');
        document.querySelectorAll('#skills .card').forEach((item)=>item.classList.add('dark'));
    }
}
