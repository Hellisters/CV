// retrieve the element for skills


var checkMode = true;

function Mode() {

    if (checkMode) {

        setTimeout(function fun() {
            document.documentElement.style.setProperty("--mode-outer", "white");
            document.documentElement.style.setProperty("--font-color", "white");
            document.documentElement.style.setProperty("--content-background", "rgba(32, 32, 32, 0.833)");
            document.documentElement.style.setProperty("--background-color", "rgb(8, 8, 8)");
            document.documentElement.style.setProperty("--collapse-middle", "white");
            document.documentElement.style.setProperty("--collapse-sides", "white");
            document.documentElement.style.setProperty("--animation-color", "white");
            document.documentElement.style.setProperty("--date-line", "rgb(255, 253, 130)");
            document.documentElement.style.setProperty("--mode-outer-border", "rgba(253, 252, 207, 0.842)");
            document.documentElement.style.setProperty("--mode-outer", "rgba(253, 252, 207, 0.842)");
            document.documentElement.style.setProperty("--mode-inner", "black");
            document.documentElement.style.setProperty("--caret-color", "cyan");
            document.documentElement.style.setProperty("--footer-color", "rgba(65, 65, 65, 0.789)");
            document.documentElement.style.setProperty("--logo-skill-hovercolor", "rgb(183, 238, 208)");
        }, 100);

        checkMode = false;
    } else if (!checkMode) {

        setTimeout(function fun() {
            document.documentElement.style.setProperty("--font-color", "black");
            document.documentElement.style.setProperty("--background-color", "rgb(251, 251, 251)");
            document.documentElement.style.setProperty("--content-background", "rgba(202, 200, 200, 0.733)");
            document.documentElement.style.setProperty("--collapse-middle", "black");
            document.documentElement.style.setProperty("--collapse-sides", "black");
            document.documentElement.style.setProperty("--mode-outer", "black");
            document.documentElement.style.setProperty("--date-line", "rgb(132, 144, 22)");
            document.documentElement.style.setProperty("--mode-outer-border", "black");
            document.documentElement.style.setProperty("--mode-outer", "black");
            document.documentElement.style.setProperty("--mode-inner", "rgba(253, 252, 207, 0.842)");
            document.documentElement.style.setProperty("--caret-color", "rgb(112, 108, 96)");
            document.documentElement.style.setProperty("--animation-color", "rgba(170, 164, 164, 0.733)");
            document.documentElement.style.setProperty("--footer-color", "rgba(170, 164, 164, 0.582)");
            document.documentElement.style.setProperty("--logo-skill-hovercolor", "rgba(170, 164, 164, 0.733)");
        }, 100);

        checkMode = true;
    }
}

// retrieve the element for skills
var skills_left = document.getElementById("skills-left");
var skills_middle = document.getElementById("skills-middle");
var skills_right = document.getElementById("skills-right");
var SecondRow = document.getElementById("Skills-row");
var checkAnimation1 = true;


//Animations for skills collapsible
skills_middle.addEventListener("click", function(e) {
    e.preventDefault;

    if (checkAnimation1) {
        SecondRow.style.display = "block";
        SecondRow.classList.remove("opacityIncrease");
        SecondRow.classList.remove("opacityDecrease");
        skills_right.classList.remove("RightReverse");
        skills_right.classList.remove("RightReverse2");
        skills_left.classList.remove("LeftReverse");
        skills_left.classList.remove("LeftReverse2");
        skills_right.classList.remove("fromRight");
        skills_right.classList.remove("fromRight2");
        skills_left.classList.remove("fromLeft");
        skills_left.classList.remove("fromLeft2");
        setTimeout(function func1() {
            // setTimeout(function func2() { skills_middle.style.backgroundColor = "rgb(73, 2, 55)"; }, 100);
            setTimeout(function func2() { SecondRow.classList.add("opacityIncrease"); }, 100);
            setTimeout(function func2() { skills_right.classList.add("fromRight"); }, 100);
            setTimeout(function func2() { skills_right.classList.add("fromRight2"); }, 100);
            setTimeout(function func2() { skills_left.classList.add("fromLeft"); }, 100);
            setTimeout(function func2() { skills_left.classList.add("fromLeft2"); }, 100);
        }, 150);


        checkAnimation1 = false;

    } else if (!checkAnimation1) {
        SecondRow.classList.remove("opacityIncrease");
        SecondRow.classList.remove("opacityDecrease");
        skills_right.classList.remove("RightReverse");
        skills_right.classList.remove("RightReverse2");
        skills_left.classList.remove("LeftReverse");
        skills_left.classList.remove("LeftReverse2");
        skills_right.classList.remove("fromRight");
        skills_right.classList.remove("fromRight2");
        skills_left.classList.remove("fromLeft");
        skills_left.classList.remove("fromLeft2");

        setTimeout(function func1() {
            setTimeout(function func2() { SecondRow.classList.add("opacityDecrease"); }, 100);
            setTimeout(function func2() { SecondRow.style.display = "none"; }, 1100);
            setTimeout(function func2() { skills_right.classList.add("RightReverse"); }, 100);
            setTimeout(function func2() { skills_right.classList.add("RightReverse2"); }, 100);
            setTimeout(function func2() { skills_left.classList.add("LeftReverse"); }, 100);
            setTimeout(function func2() { skills_left.classList.add("LeftReverse2"); }, 100);
            setTimeout(function func2() { skills_middle.style.backgroundColor = "transparent"; }, 100);
        }, 150);


        checkAnimation1 = true;
    }
}, false);

// retrieve the element for qualifications
var qual_left = document.getElementById("qual-left");
var qual_middle = document.getElementById("qual-middle");
var qual_right = document.getElementById("qual-right");
var checkAnimation2 = true;
var ThirdRow = document.getElementById("Qualifications-row");

//Animations for qualifications collapsible
qual_middle.addEventListener("click", function(e) {
    e.preventDefault;

    if (checkAnimation2) {
        ThirdRow.style.display = "block";
        ThirdRow.classList.remove("opacityIncrease");
        ThirdRow.classList.remove("opacityDecrease");
        qual_right.classList.remove("RightReverse");
        qual_right.classList.remove("RightReverse2");
        qual_left.classList.remove("LeftReverse");
        qual_left.classList.remove("LeftReverse2");
        qual_right.classList.remove("fromRight");
        qual_right.classList.remove("fromRight2");
        qual_left.classList.remove("fromLeft");
        qual_left.classList.remove("fromLeft2");
        setTimeout(function func1() {
            setTimeout(function func2() { ThirdRow.classList.add("opacityIncrease"); }, 100);
            // setTimeout(function func2() { qual_middle.style.backgroundColor = "rgb(8, 60, 72)"; }, 100);
            setTimeout(function func2() { qual_right.classList.add("fromRight"); }, 100);
            setTimeout(function func2() { qual_right.classList.add("fromRight2"); }, 100);
            setTimeout(function func2() { qual_left.classList.add("fromLeft"); }, 100);
            setTimeout(function func2() { qual_left.classList.add("fromLeft2"); }, 100);
        }, 150);

        checkAnimation2 = false;

    } else if (!checkAnimation2) {
        ThirdRow.classList.remove("opacityIncrease");
        ThirdRow.classList.remove("opacityDecrease");
        qual_right.classList.remove("RightReverse");
        qual_right.classList.remove("RightReverse2");
        qual_left.classList.remove("LeftReverse");
        qual_left.classList.remove("LeftReverse2");
        qual_right.classList.remove("fromRight");
        qual_right.classList.remove("fromRight2");
        qual_left.classList.remove("fromLeft");
        qual_left.classList.remove("fromLeft2");

        setTimeout(function func1() {
            setTimeout(function func2() { ThirdRow.classList.add("opacityDecrease"); }, 100);
            setTimeout(function func2() { ThirdRow.style.display = "none"; }, 1100);
            setTimeout(function func2() { qual_right.classList.add("RightReverse"); }, 100);
            setTimeout(function func2() { qual_right.classList.add("RightReverse2"); }, 100);
            setTimeout(function func2() { qual_left.classList.add("LeftReverse"); }, 100);
            setTimeout(function func2() { qual_left.classList.add("LeftReverse2"); }, 100);
            setTimeout(function func2() { qual_middle.style.backgroundColor = "transparent"; }, 100);

        }, 150);


        checkAnimation2 = true;
    }
}, false);


// retrieve the element for contact
var con_left = document.getElementById("contact-left");
var con_middle = document.getElementById("contact-middle");
var con_right = document.getElementById("contact-right");
var checkAnimation3 = true;
var FourthRow = document.getElementById("Contact-row");

//Animations for contact collapsible
con_middle.addEventListener("click", function(e) {
    e.preventDefault;

    if (checkAnimation3) {
        FourthRow.style.display = "block";
        FourthRow.classList.remove("opacityIncrease");
        FourthRow.classList.remove("opacityDecrease");
        con_right.classList.remove("RightReverse");
        con_right.classList.remove("RightReverse2");
        con_left.classList.remove("LeftReverse");
        con_left.classList.remove("LeftReverse2");
        con_right.classList.remove("fromRight");
        con_right.classList.remove("fromRight2");
        con_left.classList.remove("fromLeft");
        con_left.classList.remove("fromLeft2");
        setTimeout(function func1() {
            setTimeout(function func2() { FourthRow.classList.add("opacityIncrease"); }, 100);
            // setTimeout(function func2() { con_middle.style.backgroundColor = "rgb(107, 72, 72)"; }, 100);
            setTimeout(function func2() { con_right.classList.add("fromRight"); }, 100);
            setTimeout(function func2() { con_right.classList.add("fromRight2"); }, 100);
            setTimeout(function func2() { con_left.classList.add("fromLeft"); }, 100);
            setTimeout(function func2() { con_left.classList.add("fromLeft2"); }, 100);
        }, 150);

        checkAnimation3 = false;

    } else if (!checkAnimation3) {
        FourthRow.classList.remove("opacityIncrease");
        FourthRow.classList.remove("opacityDecrease");
        con_right.classList.remove("RightReverse");
        con_right.classList.remove("RightReverse2");
        con_left.classList.remove("LeftReverse");
        con_left.classList.remove("LeftReverse2");
        con_right.classList.remove("fromRight");
        con_right.classList.remove("fromRight2");
        con_left.classList.remove("fromLeft");
        con_left.classList.remove("fromLeft2");

        setTimeout(function func1() {
            setTimeout(function func2() { FourthRow.classList.add("opacityDecrease"); }, 100);
            setTimeout(function func2() { FourthRow.style.display = "none"; }, 1100);
            setTimeout(function func2() { con_right.classList.add("RightReverse"); }, 100);
            setTimeout(function func2() { con_right.classList.add("RightReverse2"); }, 100);
            setTimeout(function func2() { con_left.classList.add("LeftReverse"); }, 100);
            setTimeout(function func2() { con_left.classList.add("LeftReverse2"); }, 100);
            setTimeout(function func2() { con_middle.style.backgroundColor = "transparent"; }, 100);

        }, 150);


        checkAnimation3 = true;
    }
}, false);