function vowels(str) {
    const VOWELS = []; // тут масив из гласных
    return str
        .toLowerCase()
        .split("")
        .filter(letter => VOWELS.has(letter))
        .length;
};

function vowelsRegExp(str) {
    return Array.from(str.toLowerCase().matchAll(/[аеёиоуыэюя]/g)).length;
};

// регулярные выражения
// `/<регулярное-выражение>/<флаги>`
// new RegExp("<регулярное-выражение>", "<флаги>");

const myRegex = new RegExp('[аеёиоуыэюя]', "ig");

/h/; // h
/hello/; //hello
/[helo]/; // h, e, l, o
/[^helo]/; // всё, кроме букв: h, e, l, o
/[a-z]/; // a-z
/[A-Z]/; // A-Z
/[0-9]/; // 0-9
/[\w]/; // любая буква
/[\W]/; // не буква
/[\s]/; // whitespace - пробелы, табы, enter, перенос строки
/[\S]/; // не whitespace
/a?/; // a повторяется 0 или 1 раз 
/a*/; // a повторяется 0 или более раз 
/a+/; // a повторяется 1 или более раз 
/a{2}/; // a повторяется 2 или разa 
/a{2, }/; // a повторяется 2 и более раз 
/a{2, 4}/; // a повторяется от 2 до 4 раз 
/./; // любой символ
/^hello/; // строка начинается с hello
/bye$/; // строка заканчивается на bye
/^privet$/; // строка содержит только слово privet
/(hello)|(privet)/; // или hello или privet
/.*\.com$/; // заканчивается на .com (\ экранирует обратные символы)

const text='истоки рок-музыки лежат в блюзе из которого и вышли первые рок-жанры рок-н-ролл и рокабилли первые поджанры рок-музыки возникали в тесной связи с народной и эстрадной музыкой того времени в первую очередь это фолк кантри скиффл мюзик-холл за время своего существования были попытки соединить рок-музыку практически со всеми возможными видами музыки с академической музыкой арт-рок появляется в конце 60-х и более поздний симфо-метал джазом джаз-рок появляется в конце 60-х начале 70-х латинской музыкой латино-рок появляется в конце 60-х индийской музыкой рага-рок появляется в середине 60-х в 60-70-х годах появились практически все крупнейшие поджанры рок-музыки наиболее важными из которых помимо перечисленных являются хард-рок панк-рок рок-авангард в конце 70-х-начале 80-х появились такие жанры рок-музыки как пост-панк новая волна альтернативный рок хотя уже в конце 60-х годов появляются ранние представители этого направления хардкор крупный поджанр панк-рока а позже и брутальные поджанры метала дэт-метал блэк-метал в 90-х годах получили широкое развитие жанры гранж появился в середине 80-х брит-поп появляется в середине 60-х альтернативный метал появляется в конце 80-х';


// [name]@[domain].[org]
// name     \w\d-_- {4, 32} буквы, цифры, -, _
// domain - \w      {3, 16}
// org -    \w      {2, 3}
function isEmail(emailStr = "") {
    const ENGLICH_ALPHABET_LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    const ENGLICH_ALPHABET_UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const ENGLICH_ALPHABET = ENGLICH_ALPHABET_LOWERCASE + ENGLICH_ALPHABET_UPPERCASE;
    const DIGETS = "0123456789";

    const parts = emailStr.split("@");
    if (parts !== 2) {
        return false;
    }

    const [name, domainStr] = parts;
    const domainParts = domainStr.split(".");

    if (domainParts.length !== 2) {
        return false;
    }

    const [domain, org] = domainParts;

    if (name.length < 4 || name.length > 32) {
        return false;
    }

    if (domain.length < 3 || name.length > 16) {
        return false;
    }

    if (org.length < 4 || org.length > 32) {
        return false;
    }

    name.split("").filter(letter => englishAlphabet.includes(letter) || digets.includes(letter) || "-_.".includes(letter));

    // доделать
}

function isEmailRegex(emailStr) {
    const emailRegexp = /^[\w\-_\.]{4, 32}@[a-zA-Z]{3, 16}\.[a-zA-Z]{2,3}$/; // не работает что-то

    return emailRegexp.test(emailStr);
};

"".match(/hello/); // первое подходящее значение
"".matchAll(/hello/); // все подходящие значения
"".replace(/[hello]+/, "123"); // заменить подходящее на другую строку
"".replaceAll(/[hello]+/, "123"); // заменить все подходящие на другую строку
/[helo]/.exec(""); // первое подходящее значение
/[helo]/.test(""); // есть ли значение в строке (true/false)

