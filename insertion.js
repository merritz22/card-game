let s_tree = [],//bank card organiser
    p1_tree = [],//player 1 card
    p2_tree = [],//player 2 card
    g_tree = [],//game zone card
    tree = [],
    tour = 0,
    g_num_card = null,
    g_type_card = null,
    g_color_card = null,
    pic_card = 0;//bank card unordered

function Card(number,color,content) {
    //declaration des variable qui vont servir a representer une carte
    var table = document.createElement('table'),
        fi_line = document.createElement('tr'),
        se_line = document.createElement('tr'),
        th_line = document.createElement('tr'),
        fi_cell = document.createElement('td'),
        se_cell = document.createElement('td'),
        i_cell = document.createElement('td'),
        ii_cell = document.createElement('td'),
        center_cell = document.createElement('td'),
        b_last_cell = document.createElement('td'),
        last_cell = document.createElement('td'),
        img = document.createElement('img');
    //definition des proprieté des varibles de constitution
    // fi_line : premiere ligne du tableau qui contient fi et se _cell

    fi_cell.setAttribute('colspan','2');
    fi_cell.setAttribute("style","text-align: left;");
    fi_cell.textContent = number;
    se_cell.setAttribute("style","text-align: right;");
    se_cell.textContent = '';
    fi_line.append(fi_cell);
    fi_line.append(se_cell);

    //se_line qui contiendra l'image / le canvas

    img.setAttribute('src',content);
    img.setAttribute('style',"width: 60px;height: 70px;");
    se_line.append(i_cell);
    center_cell.setAttribute('style','padding-left:auto;padding-right: auto;');
    // center_cell.setAttribute('colspan','3');
    if (number == 'JOCKER') {
        center_cell.append(img);
    }else if (content == "treffle") {
        img.setAttribute('src',"./assets/cb editz (87).jpg");
        center_cell.append(img);
    }else{
        img = document.createElement('canvas');
        let ctx1 = img.getContext('2d');
        if (content == "coeur") {
            img.setAttribute('style','width: 60px;height: 70px;');
            draw_Coeur(ctx1);
        }else if (content == "feuille") {
            img.setAttribute('style','width: 60px;height: 70px;transform:rotate(180deg);');
            draw_Feuille(ctx1);
        }else if (content == "faux_carre") {
            img.setAttribute('style','width: 60px;height: 70px;transform:rotate(-40deg);');
            draw_f_carre(ctx1);
        }
        center_cell.append(img);
    }
    se_line.append(center_cell);
    se_line.append(ii_cell);

    // th_line qui contiendra les elements de la deuxieme ligne du tableau

    last_cell.setAttribute('colspan','2');
    last_cell.setAttribute("style","transform: rotate(0.5turn);");
    last_cell.textContent = number;
    b_last_cell.textContent = '';
    th_line.append(b_last_cell);
    th_line.append(last_cell);

    //fusion des cellule avec le tableau contenant ...

    table.setAttribute('style',"border: 0.5px solid black;color: "+color+";border-radius: 10px;padding: 5px;box-shadow: 1px 1px 1px black;background: white;");
    table.append(fi_line,se_line,th_line);
    
    this.carte = table;
    this.numero = number;
    this.content = content;
    this.type = color;
}

function gen_tree_card() {
    let j_red = new Card('JOCKER','red','./assets/cb editz (10).jpg');
    let j_black = new Card('JOCKER','black','./assets/cb editz (35).jpg');
    tree.push(j_red,j_black);
    for (let i = 1; i < 14; i++) {
        let op,op1,op2,op3;
        if (i == 1) {
            op = new Card('A','red','coeur');
            op1 = new Card('A','black','feuille');
            op2 = new Card('A','red','faux_carre');
            op3 = new Card('A','black','treffle');
        }else if (i == 11) {
            op = new Card('J','red','coeur');
            op1 = new Card('J','black','feuille');
            op2 = new Card('J','red','faux_carre');
            op3 = new Card('J','black','treffle');
        }else if (i == 12) {
            op = new Card('Q','red','coeur');
            op1 = new Card('Q','black','feuille');
            op2 = new Card('Q','red','faux_carre');
            op3 = new Card('Q','black','treffle');
        }else if (i == 13) {
            op = new Card('K','red','coeur');
            op1 = new Card('K','black','feuille');
            op2 = new Card('K','red','faux_carre');
            op3 = new Card('K','black','treffle');
        }else{
            op = new Card(i,'red','coeur');
            op1 = new Card(i,'black','feuille');
            op2 = new Card(i,'red','faux_carre');
            op3 = new Card(i,'black','treffle');
        }
        tree.push(op,op1,op2,op3);
    }
}

function draw_Coeur (ctx1) {
    ctx1.save();
    ctx1.translate(70,10);
    
    ctx1.beginPath();
    ctx1.fillStyle = "#FF0000";
    ctx1.moveTo(75, 40);
    ctx1.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx1.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx1.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx1.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx1.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx1.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx1.fill();
    ctx1.closePath();
    
    ctx1.restore();
}


function draw_Feuille(ctx1) {
    ctx1.save();
    ctx1.translate(70,10);

    ctx1.beginPath();
    ctx1.fillStyle = "#000";
    ctx1.moveTo(75, 40);
    ctx1.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx1.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx1.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx1.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx1.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx1.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx1.moveTo(75, 40);
    ctx1.lineTo(100,4);
    ctx1.lineTo(50,4);
    
    ctx1.fill();
    ctx1.closePath();

    ctx1.restore();

}

function draw_f_carre(ctx1) {
    ctx1.save();
    ctx1.translate(70,40);

    var rectangle = new Path2D();
    rectangle.rect(0, 0, 150, 80);

    ctx1.fillStyle = "#FF0000";
    ctx1.strokeStyle = "#FF0000";

    ctx1.fill(rectangle);
    ctx1.stroke(rectangle);
    ctx1.restore();
}


function shuffle(tree_i,tree_f) {
    let tree_in = [], j=0;
    if (tree_i.length > 0) {
        let num = Math.floor(Math.random()*tree_i.length);
        tree_f.push(tree_i[num]);
        for (let i = 0; i < tree_i.length; i++) {
            if (i != num){
                tree_in[j] = tree_i[i];
                j++;
            }
        }
        shuffle(tree_in,tree_f);
    }
}

function show_player_card(num) {
    if (num == 1) {
        for (let i = 0; i < p1_tree.length; i++) {
            document.querySelector('.card_tree1').append(p1_tree[i].carte);
        }
    }else{
        for (let i = 0; i < p2_tree.length; i++) {
            document.querySelector('.card_tree2').append(p2_tree[i].carte);
        }
    }
}

function show_game_zone_card() {
    document.querySelector('.play_zone').innerHTML = '';
    document.querySelector('.play_zone').append(g_tree[g_tree.length - 1].carte);
    g_num_card = g_tree[g_tree.length - 1].numero;
    g_type_card = g_tree[g_tree.length - 1].content;
    g_color_card = g_tree[g_tree.length -1].type;
}

function show_bank() {
    // action de banquage !!!!!
    document.querySelector('.bank').addEventListener('click',function () {
        if (pic_card == 0) {
            bank_f();
        }else{
            take_pic_card();
            pic_card = 0;
        }
    })
}

function change_active(num) {
    if (num == 1) {
        document.querySelector('.jeton1').setAttribute('style','background: none;');
        document.querySelector('.jeton2').setAttribute('style','background: red;');
        document.querySelector('.jeton1').id = 'off';
        document.querySelector('.jeton2').id = 'on';
        if (p2_tree.length == 0 && p1_tree.length != 0) {
            document.querySelector('.g_word').setAttribute('style','display: inline;')
            setTimeout(() => {
                location = "./index.html";
            }, 5000);
        }else if (p1_tree.length == 0 && p2_tree.length == 0) {
            alert('match null');
        }
    }else{
        document.querySelector('.jeton2').setAttribute('style','background: none;');
        document.querySelector('.jeton1').setAttribute('style','background: red;');
        document.querySelector('.jeton2').id = 'off';
        document.querySelector('.jeton1').id = 'on';
        if (p1_tree.length == 0 && p2_tree.length != 0) {
            document.querySelector('.g_word').setAttribute('style','display: inline;')
            setTimeout(() => {
                location = "./index.html";
            }, 5000);
        }else if (p1_tree.length == 0 && p2_tree.length == 0) {
            alert('match null');
        }
    }
}

function take_pic_card() {
    let jeton = document.querySelector('.jeton2').id;
    let elt;
    if (jeton == 'on') {
        for (let i = 0; i < pic_card; i++) {
            elt = s_tree.pop();
            p2_tree.push(elt);
            elt.carte.setAttribute('id',(p2_tree.length - 1)+'');
            play_controls_1(elt);
            show_player_card(2);
            change_active(2);
        }
    }else{
        for (let i = 0; i < pic_card; i++) {
            elt = s_tree.pop();
            p1_tree.push(elt);
            elt.carte.setAttribute('id',(p1_tree.length - 1)+'');
            play_controls_2(elt);
            show_player_card(1);
            change_active(1);
        }
    }
}

function bank_f() {
    let jeton = document.querySelector('.jeton2').id;
    let elt = s_tree.pop();
    if (jeton == 'on') {
        p2_tree.push(elt);
        elt.carte.setAttribute('id',(p2_tree.length - 1)+'');
        play_controls_1(elt);
        show_player_card(2);
        change_active(2);
    }else{
        p1_tree.push(elt);
        elt.carte.setAttribute('id',(p1_tree.length - 1)+'');
        play_controls_2(elt);
        show_player_card(1);
        change_active(1);
    }
}

function play_controls_1(elt) {
    elt.carte.addEventListener('click',function () {
        // alert(this.id);
        let jeton = document.querySelector('.jeton2').id;
        if (jeton == 'on') {
            // if (tour > 1) {
            if ((tour > 1) && (pic_card > 0) && (g_tree[g_tree.length - 1].numero == 7 || g_tree[g_tree.length - 1].numero == 'JOCKER')) {
                if (p2_tree[new Number(this.id)].numero == 7 || p2_tree[new Number(this.id)].content == 'JOCKER') {
                    if (p2_tree[new Number(this.id)].numero == 7) {
                        pic_card += 2;
                    }else if (p2_tree[new Number(this.id)].numero == 'JOCKER') {
                        pic_card += 4;
                    }
                    if (p2_tree[new Number(this.id)].numero != 'A') {
                        change_active(2);
                    }
                    document.querySelector('.appr').innerHTML = '<br>BIEN FAIT POUR LUI !!  in one</br>';
                    g_tree.push(p2_tree.splice(new Number(this.id),1)[0]);
                    update_id(p2_tree);
                    show_game_zone_card();
                }else{
                    document.querySelector('.appr').innerHTML = '<br>BAD in one</br>';
                }  
            }else{
                if (p2_tree[new Number(this.id)].numero == 'J'){
                    j_commande();
                    g_tree.push(p2_tree.splice(new Number(this.id),1)[0]);
                    update_id(p2_tree);
                    show_game_zone_card();
                    change_active(2);
                    tour ++;
                }else
                if (p2_tree[new Number(this.id)].numero == g_num_card || p2_tree[new Number(this.id)].content == g_type_card || ((p2_tree[new Number(this.id)].numero == 'JOCKER' || g_num_card == 'JOCKER') && (p2_tree[new Number(this.id)].type == g_color_card))) {
                    if (p2_tree[new Number(this.id)].numero == 7) {
                        pic_card += 2;
                    }else if (p2_tree[new Number(this.id)].numero == 'JOCKER') {
                        pic_card += 4;
                    }
                    if (p2_tree[new Number(this.id)].numero != 'A') {
                        change_active(2);
                    }
                    document.querySelector('.appr').innerHTML = '<br>GOOD  in one</br>';
                    g_tree.push(p2_tree.splice(new Number(this.id),1)[0]);
                    update_id(p2_tree);
                    show_game_zone_card();
                    tour ++;
                }else{
                    document.querySelector('.appr').innerHTML = '<br>BAD  in one</br>';
                }        
            }
        }
    })
}
function play_controls_2(elt) {
    elt.carte.addEventListener('click',function () {
        // alert(this.id);
        let jeton = document.querySelector('.jeton1').id;
        if (jeton == 'on') {
            // alert('ok');
            if ((tour > 1) && (pic_card > 0) && (g_tree[g_tree.length - 1].numero == 7 || g_tree[g_tree.length - 1].numero == 'JOCKER')) {
                if (p1_tree[new Number(this.id)].numero == 7 || p1_tree[new Number(this.id)].content == 'JOCKER') {
                    if (p1_tree[new Number(this.id)].numero == 7) {
                        pic_card += 2;
                    }else if (p1_tree[new Number(this.id)].numero == 'JOCKER') {
                        pic_card += 4;
                    }
                    if (p1_tree[new Number(this.id)].numero != 'A') {
                        change_active(1);
                    }
                    document.querySelector('.appr').innerHTML = '<br>BIEN FAIT POUR LUI !!</br>';
                    g_tree.push(p1_tree.splice(new Number(this.id),1)[0]);
                    update_id(p1_tree);
                    show_game_zone_card();
                }else{
                    document.querySelector('.appr').innerHTML = '<br>BAD</br>';
                }
            }else{
                if (p1_tree[new Number(this.id)].numero == 'J'){
                    j_commande();
                    g_tree.push(p1_tree.splice(new Number(this.id),1)[0]);
                    update_id(p1_tree);
                    show_game_zone_card();
                    change_active(1);
                    tour ++;
                }else
                if (p1_tree[new Number(this.id)].numero == g_num_card || p1_tree[new Number(this.id)].content == g_type_card || ((p1_tree[new Number(this.id)].numero == 'JOCKER' || g_num_card == 'JOCKER') && (p1_tree[new Number(this.id)].type == g_color_card))) {
                    if (p1_tree[new Number(this.id)].numero == 7) {
                        pic_card += 2;
                    }else if (p1_tree[new Number(this.id)].numero == 'JOCKER') {
                        pic_card += 4;
                    }
                    if (p1_tree[new Number(this.id)].numero != 'A') {
                        change_active(1);
                    }
                    document.querySelector('.appr').innerHTML = '<br>GOOD</br>';
                    g_tree.push(p1_tree.splice(new Number(this.id),1)[0]);
                    update_id(p1_tree);
                    show_game_zone_card();
                    tour ++;
                }else{
                    document.querySelector('.appr').innerHTML = '<br>BAD here</br>';
                }        
            }
        }
    })
}
function j_commande() {
    document.querySelector('.choose').setAttribute('style','display: flex;');
    document.querySelector('.coeur').addEventListener('click',function () {
        g_type_card = 'coeur';
        g_color_card = 'red';
        document.querySelector('.choose').setAttribute('style','display: none;');
        document.querySelector('.appr').innerHTML = '<br>J-COMMANDE <br>'+g_type_card+'</br>';
    })
    document.querySelector('.treffle').addEventListener('click',function () {
        g_type_card = 'treffle';
        g_color_card = 'black';
        document.querySelector('.choose').setAttribute('style','display: none;');
        document.querySelector('.appr').innerHTML = '<br>J-COMMANDE <br>'+g_type_card+'</br>';
    })
    document.querySelector('.faux_carre').addEventListener('click',function () {
        g_type_card = 'faux_carre';
        g_color_card = 'red';
        document.querySelector('.choose').setAttribute('style','display: none;');
        document.querySelector('.appr').innerHTML = '<br>J-COMMANDE <br>'+g_type_card+'</br>';
    })
    document.querySelector('.feuille').addEventListener('click',function () {
        g_type_card = 'feuille';
        g_color_card = 'black';
        document.querySelector('.choose').setAttribute('style','display: none;');
        document.querySelector('.appr').innerHTML = '<br>J-COMMANDE <br>'+g_type_card+'</br>';
    })
}

window.addEventListener('load',function () {
    let elt1,elt2;
    gen_tree_card();
    shuffle(tree,s_tree);
    tree = [];
    shuffle(tree,s_tree);
    for (let i = 0; i < 4; i++) {
        elt1 = s_tree.pop();
        elt2 = s_tree.pop();
        p1_tree.push(elt1);
        p2_tree.push(elt2);
        elt2.carte.setAttribute('id',(p2_tree.length - 1)+'');
        play_controls_1(elt2);
        elt1.carte.setAttribute('id',(p1_tree.length - 1)+'');
        play_controls_2(elt1);
    }
    // tour++;
    g_tree.push(s_tree.pop());
    show_player_card(1);
    show_player_card(2);
    show_game_zone_card();
    show_bank();
    this.document.querySelector('.jeton2').setAttribute('style','background: red;');
    this.document.querySelector('.jeton2').setAttribute('id','on');
})

//mise a jour des données sur les positions des carte d'un joueur
function update_id(this_tree) {
    for (let i = 0; i < this_tree.length; i++) {
        this_tree[i].carte.setAttribute('id',i+'');
    }
}


