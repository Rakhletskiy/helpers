export interface CurltureInfo {
	months: string[];
	weekdays: string[];
}

declare global {

    /**
     * Расширение обьекта String
     */
	interface String {
        /**
         * Форматная печать, по типу {1} {2} и т.д.
         */
        format(): string;
        /**
         * Алиас функции format
         */
        f(): string;
        /**
         * Заменяет все! вхождения строки или регекспа в текущей строке
         * @param from string | regexp
         * @param to string
         */
        replaceAll(from: any, to: any): string;
        /**
         * Тоже, что и replaceAll но заменяет список строк
         * @param from string[]
         * @param to string
         */
        replaceArray(from: string[], to: string): string;
        /**
         * Удаляет из строки html тэги
         */
        stripHtml(): string;
        /**
         * Удаляет символ(ы) c в начале строки
         * @param c string
         */
        ltrim(c: string): string;
        /**
         * Удаляет символ(ы) c в конце строки
         * @param c string
         */
        rtrim(c: string): string;
        /**
         * Заменяет символ или строку с обоих сторон строки
         * @param c string
         */
        trim2(c: string): string
        /**
         * Делаем цифру из строки
         */
        toInt(): number;
        /**
         * Проверяет число ли, числительное
         */
        isFinite(): boolean;
        /**
         * Проверяет число ли в строке
         */
        isNumeric(): boolean;
        /**
         * Проверяет email ли
         */
        isEmail(): boolean;
        /**
		 * Проверить Url или нет
		 */
		isUrl(): boolean;
        /**
		 * Проверить на пустое значение
		 */
		isEmpty(): boolean;
        /**
         * Дополняет символом до количества слева
         * @param c символ
         * @param l количество
         */
        expand(c:string,l:number): string;
        /**
         * Превращает строку в дату
         */
        toDate(): Date;
        /**
         * Превращает строку в дату без времени
         */
        toShortDate(): Date;
        /**
         * Вырезает заданное количество слов из строки и ставит троеточие
         * @param l количество слов
         */
        words(l: number): string;
        /**
         * Число с 2 знаками после запятой в строку, удаляет пробелы
         */
        fromMoney(): number;
        /**
         * ! проверить и описать
         */
        fromTimeString(): string;
        /**
         * Делает первую букву большой
         */
        capitalize(): string;
        /**
         * Транслитерирует русские буквы в английские
         */
        transliterate(): string;
        /**
         * Вырезает заданное количество символов и ставит троеточие
         * @param length длина
         */
        ellipsis(length: number): string;
        /**
         * Переворачивает строку
         */
        reverse(): string;
        /**
         * Обратная конвертация из 16-ричной строки
         */
        hexToString(): string | undefined;
        /**
         * Делит строку по разделителям и превращает в обьект
         * @param delimiters разделители
         */
        toObject(delimiters: string[]): any;
        /**
         * Превращает обьект в строку с разделителями
         * @param object обьект
         * @param delimiters разделители
         */
        fromObject(object: any, delimiters: string[]): string;

    }

    /**
     * Конструктор строк
     */
    interface StringConstructor {
        /**
         * Статическая функция в String для создания GUID
         */
        GUID(): string;
    }

    /**
     * Конструктор Object
     */
    interface ObjectConstructor {
        /**
         * Перебор обьекта, останавливается когда функция колбэк возвращает false
         * @param o обьект
         * @param callback функция
         */
        forEach(o: any, callback: any): void
        /**
         * Перебор обьекта в массив, возвращает массив из результатов функции
         * @param o обьект
         * @param callback функция
         */
        map(o: any, callback: any): any
        /**
         * Считает количество свойств обьекта
         * @param o обьект
         */
        countKeys(o: any): number;
        /**
         * Конвертирует обьект в массив
         * @param o обьект
         */
        toArray(o: any): any[];
        /**
         * Вырезает кусок обьекта по заданным ключам
         * @param o обьект
         * @param keys ключи
         */
        cut(o: any, keys: string[]): any;
        /**
         * Проверяет подходит ли обьект к типу
         * @param object обьект
         * @param type тип
         */
		isKindOf(object: any, type: any): boolean;
    }

    /**
     * Конструктор Number
     */
    interface NumberConstructor {
        /**
         * Произвольное число между мин и макс
         * @param min минимум
         * @param max максимум
         */
        random(min: number, max: number): number;
        /**
         * Четыре произвольные цифры
         */
        Rnd4(): string;
    }

    /**
     * Расширение класса Number
     */
    interface Number {
        /**
         * Возвращает дату из цифры UTC Unix Timestamp
         */
        toDateFromUnixTime(): Date;
        /**
         * Возвращает число и лейбл в правильном варианте по русски, например 1 яблоко, 2 яблока 3 яблока, но 5 яблок
         * @param labels лейблы
         * @param viewnumber отображать число
         */
        formatSequence(labels: string[], viewnumber?: boolean): string;
        /**
         * Считает количество цифр после запятой
         */
        decPlaces(): number;
        /**
         * Превращает число в правильный формат
         * @param d количество знаков после запятой
         * @param f форсировать
         */
        toMoney(d: number, f: true): string;
        /**
         * Превращает количество секунд в минуты:секунды
         * @param daySplitter разделитель
         */
        toTimeString(daySplitter?: string): string;
        /**
         * Используется для правильного отображения количества байт в нужное количество мегабайт, например
         * @param postfixes постфиксы
         * @param range разделитель
         */
        toSizeString(postfixes: string[], range: number): string
        /**
		 * Превращает число в текст
		 */
        toText(): string;
    }

	interface Date {
		timezoneoffset: number;
		toLocalDate(): Date;
		format(format: string): string;
		cultureInfo(): CurltureInfo;
	}

}

Object.forEach = function(o, callback) {
    Object.keys(o).forEach(function(k) {
        if(o.hasOwnProperty(k)) {
            if(!callback.apply(o, [k, o[k]])) {
                return false;
            }
        }
        return true;
    });
}

Object.map = function(o, callback) {
    return Object.keys(o).map(function(k) {
        if(o.hasOwnProperty(k)) {
            return callback.apply(o, [k, o[k]]);
        }
        return null;
    });
}

Object.countKeys = function(o) {return Object.keys(o).length;}

Object.toArray = function(o: any): any[] {
	let ret: any[] = [];
	Object.forEach(o, (k: string, o: any) => {
		ret.push(o);
	})
	return ret;
}

Object.cut = function(o: any, keys: string[]): any {
	let ret = {};
	Object.forEach(o, (k:string, v: any) => {
		if(keys.indexOf(k) !== -1)
			ret[k] = v;
	});
	return ret;
}

Object.isKindOf = function(o: any, t: any): boolean {
	let ret: boolean = o instanceof t;
	if(ret) return ret;
	let keys: string[] = Object.keys(o);
    let oKeys: string[] = Object.keys(new t);

	let newKeys = oKeys.filter( (k: string) => { return keys.indexOf(k) !== -1 });
	return (newKeys.length == oKeys.length);

}

Number.random = function(min, max) {
    return Math.floor(min + Math.random()*(max + 1));
}
Number.Rnd4 = function() {
   return (((1+Math.random()) * 0x10000)|0).toString(16).substring(1);
};

Number.prototype.toDateFromUnixTime = function() { let num: number = this as number; var d = new Date(); d.setTime(num * 1000); return d; }
Number.prototype.formatSequence = function($labels, $viewnumber) {
    let $s = this + " ";
    if(!$viewnumber || $viewnumber == undefined)
        $s = "";

    let $ssecuence = this + '';
    let $sIntervalLastChar = $ssecuence.substr($ssecuence.length-1, 1);
    if(parseInt($ssecuence) > 10 && parseInt($ssecuence) < 20)
        return $s + $labels[2];
    else {
        switch(parseInt($sIntervalLastChar)) {
            case 1:
                return $s + $labels[0];
            case 2:
            case 3:
            case 4:
                return $s + $labels[1];
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 0:
                return $s + $labels[2];
        }
    }
    return '';
}
Number.prototype.decPlaces = function() {
    let n = this + '';
    let nn = n.split('.');
    if(nn.length <= 1)
        return 0;
    return nn[1].length;
}
Number.prototype.toMoney = function(digits, force) {
    var result = '';
    if(digits == undefined)
        digits = 2;

    var price = this.toFixed(digits);
    var price = '' + price;
    var parts = price.split(/\.|\,/);

    price = parts[0];
    var dec = ( parts[1] != null ) ? parts[1] : '';

    var len = price.length;
    var count = Math.floor( len / 3 );

    for(var i = 0; i < count; i++) {
        result = (!( i == (count - 1) && len % 3 == 0) ? ' ' : '') + price.substr( len - (i + 1) * 3, 3) + result;
    }

    result = price.substr(0, len - count*3) + result;
    return result + ( dec ? ',' + dec : (force ? ',' + '0'.repeat(digits) : ''));
}
Number.prototype.toTimeString = function(daySplitter?: string) {
    var days = 0;
    var hours = 0;
    var mins = 0;
    var secs = 0;
    var number = this as number;

    if(number >= 60) {
        secs = number % 60; number = parseInt( number / 60 + '' );
        if(number >= 60) {
            mins = number % 60; number = parseInt(number / 60 + '');
            if(number >= 24) {
                hours = number % 24; number = parseInt(number / 24 + '');
                days = number;
            }
            else
                hours = number;
        }
        else
            mins = number;
    }
    else {
        secs = number;
    }

    let txt = "";
    txt += (days + '').expand("0", 2) + ":";
    txt += (hours + '').expand("0", 2) + ":";
    txt += (mins + '').expand("0", 2) + ":";
    txt += (secs + '').expand("0", 2) + ":";

    txt = txt.ltrim('0').ltrim(':').rtrim(':');

    if(daySplitter && txt.split(':').length > 3) {
        // day exists
        txt = txt.replace(':', daySplitter);
    }

    return txt;
}
Number.prototype.toSizeString = function(postfixes, range) {
    var number: number = this as number;
    let j = 0;
    for(j=0; j < postfixes.length; j++) {
        if(number <= range)
            break;
        else
            number = number/range;
    }
    let snumber: string = number.toFixed(2);
    return snumber + " " + postfixes[j];
}


Number.prototype.toText = function(): string {

	var TRIPLET_NAMES = [
			undefined,
			['тысяча', 'тысячи', 'тысяч'],
			['миллион', 'миллиона', 'миллионов'],
			['миллиард', 'миллиарда', 'миллиардов'],
			['триллион', 'триллиона', 'триллионов'],
			['квадрилион', 'квадрилиона', 'квадрилионов'],
		],
		ZERO_NAME = 'ноль',
		ONE_THOUSANT_NAME = 'одна',
		HUNDRED_NAMES = [
			undefined, 'сто', 'двести', 'триста', 'четыреста',
			'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот',
		],
		TEN_NAMES = [
			undefined, undefined, 'двадцать', 'тридцать', 'сорок',
			'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто',
		],
		UNIT_NAMES = [
			ZERO_NAME, 'один', 'два', 'три', 'четыре',
			'пять', 'шесть', 'семь', 'восемь', 'девять',
		],
		TEN_UNIT_NAMES = [
			'десять', 'одиннадцать', 'двенадцать', 'тринадцать',
			'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать',
			'восемнадцать', 'девятнадцать',
		]


	function pluralEnding(number: any, variants: any) {
		var one = variants[0],
			two = variants[1],
			five = variants[2];
		number = Math.abs(number);
		number %= 100;
		if (number >= 5 && number <= 20) {
			return five;
		}
		number %= 10;
		if (number === 1) {
			return one;
		}
		if (number >= 2 && number <= 4) {
			return two;
		}
		return five;
	}

	var numberInWords = [],
		i,
		pos,
		length,
		tripletNames,
		tripletIndex,
		digitPosition,
		prevDigitValue;

	var number: any = this;

	if (typeof(number) !== "string") {
		number = number + '';
	}

	length = number.length;

	for (i = 0; i < length; i += 1) {
		pos = length - 1 - i;
		tripletIndex = Math.floor(pos / 3);
		digitPosition = pos % 3;
		var digitValue = parseInt(number[i]);

		if (digitPosition === 2) {
			if (digitValue) {
				numberInWords.push(HUNDRED_NAMES[digitValue]);
			}
			continue;
		}
		if (digitPosition === 1) {
			if (digitValue === 1) {
				numberInWords.push(TEN_UNIT_NAMES[parseInt(number[i + 1])])
			} else if (digitValue) {
				numberInWords.push(TEN_NAMES[digitValue])
			}
			continue
		}
		if (digitPosition === 0) {
			prevDigitValue = i - 1 >= 0
				? parseInt(number[i - 1])
				: undefined;

			if (digitValue === 0) {
				if (length === 1) {
					numberInWords.push(ZERO_NAME);
				}
			} else if (prevDigitValue && prevDigitValue !== 1
					|| !prevDigitValue) {
				numberInWords.push(tripletIndex === 1 && digitValue == 1
					? ONE_THOUSANT_NAME
					: UNIT_NAMES[digitValue])
			}

			tripletNames = TRIPLET_NAMES[tripletIndex];
			if (tripletNames) {

				if (prevDigitValue === 1) {
					numberInWords.push(
						pluralEnding(10 + digitValue, tripletNames));
				} else {
					numberInWords.push(
						pluralEnding(digitValue, tripletNames));
				}
			}
			continue;
		}
	}

	return numberInWords.join(' ');

}

export const replaceAll = (s:string, from: any, to: any) => {
    var s1 = s.replace(from, to);
    while(s != s1) {
        s = s1;
        s1 = s.replace(from, to);
    }
    return s1;
}

String.prototype.format = String.prototype.f = function(...args) { return (this + '').replace(/\{(\d+)\}/g, (m, n) => args[n - 1] || m); }

String.prototype.stripHtml = function () { return this.replace(/<[^>]+>/gim, "").replace(/<\/[^>]+>/gim, "").replace(/&nbsp;/gim, ""); }
String.prototype.ltrim = function (c) { return this.replace(new RegExp('^' + (c != undefined ? c : '\\s') + '+'),""); }
String.prototype.rtrim = function (c) { return this.replace(new RegExp((c != undefined ? c : '\\s') + '+$'),""); }
String.prototype.trim2 = function (c) { return this.replace(new RegExp('^' + (c != undefined ? c : '\\s') + '*(.*?)' + (c != undefined ? c : '\\s') + '*$'), '$1'); }
String.prototype.toInt = function() {
    return parseInt(this + '');
}
String.prototype.isFinite = function () { return isFinite( parseInt(this + '') ); }
String.prototype.isNumeric = function () { return this.isFinite(); }
String.prototype.isEmail = function () {
    if (this.indexOf(" ") != -1) return false;
    else if (this.indexOf("@") == -1) return false;
    else if (this.indexOf("@") == 0) return false;
    else if (this.indexOf("@") == (this.length-1)) return false;
    var arrayString = (function (s, separator) {
        var retArr = new Array();

        if (separator.length != 0) {
            var i = 0;
            while (s.indexOf(separator) != -1) { retArr[i] = s.substring(0, s.indexOf(separator)); s = s.substring(s.indexOf(separator)+separator.length, s.length+1); i++; } retArr[i] = s;
        }
        else {
            for (var i = 0; i < s.length; i++)
                retArr[i] = s.substring(i, i+1);
        }
        return retArr;
    })(this, "@");
    if (arrayString[1].indexOf(".") == -1)
        return false;
    else if (arrayString[1].indexOf(".") == 0)
        return false;
    else if (arrayString[1].charAt(arrayString[1].length-1) == ".")
        return false;
    return true;
}
String.prototype.isUrl = function(): boolean {
	let str = this + '';
	if(str.substr(0, 2) == '//') return true;
	if(['http', 'https', 'ftp', 'ws', 'wss'].indexOf(str.split(':')[0]) !== -1) return true;
	return false;
}
String.prototype.isEmpty = function(): boolean {
	return this.trim() == '';
}
String.prototype.expand = function(c, l) {
    if( this.length >= l )
        return this as string;
    else
        return c.repeat(l - this.length) + this;
}
String.prototype.toDate = function() {
    var t = this.replace('T', ' ');
    t = t.split('+')[0];
    var parts = t.split(' ');
    var dateParts = parts[0].split('-');
    var timeParts = parts[1] ? parts[1].split(':') : ['0', '0', '0'];
    return new Date((dateParts[0] + '').toInt(), (dateParts[1] + '').toInt()-1, (dateParts[2] + '').toInt(), (timeParts[0] + '').toInt(), (timeParts[1] + '').toInt(), (timeParts[2] + '').toInt());
}
String.prototype.toShortDate = function() {
    var parts = this.split('/');
    return new Date(parseInt(parts[2]), parseInt(parts[1]), parseInt(parts[0]));

}
String.prototype.words = function(l) {
    var a = this.split(/ |,|\.|-|;|:|\(|\)|\{|\}|\[|\]/);

    if (a.length > 0) {
        if (a.length == 1)
            return this + '';
        else if(a.length < l)
            return this + '';

        let i = 0;
        for(let j=0; j<l;j++) {
            i = i + a[j].length+1;
        }

        return this.substr(0, i) + '...';
    }
    else {
        return this.substr(0, l) + '...';
    }
}
String.prototype.replaceAll = function(from, to) {
    var s = this;
    var s1 = s.replace(from, to);
    while(s != s1) {
        s = s1;
        s1 = s.replace(from, to);
    }
    return s1;
}
String.prototype.replaceArray = function(from, to) {
    var ret = this;
    from.forEach(function(el) {
        ret = ret.replaceAll(el, to);
    });
    return ret + '';
}
String.prototype.fromMoney = function() {
    return parseInt(this.replace(/\s*/g,''));
}
String.prototype.fromTimeString = function() {
    var parts = this.split(':');
    return parseInt( (parseInt(parts[2]) + '') + (parseInt(parts[1]) * 60 + '') + (parseInt(parts[0]) * 60 * 60 + '')) + '';
}
String.prototype.capitalize = function() {
    return this.substr(0, 1).toUpperCase() + this.substr(1);
}
String.prototype.transliterate = function() {
    var val = this;

    let A = new Array();
    A["Ё"]="YO";A["Й"]="I";A["Ц"]="TS";A["У"]="U";A["К"]="K";A["Е"]="E";A["Н"]="N";A["Г"]="G";A["Ш"]="SH";A["Щ"]="SCH";A["З"]="Z";A["Х"]="H";A["Ъ"]="'";
    A["ё"]="yo";A["й"]="i";A["ц"]="ts";A["у"]="u";A["к"]="k";A["е"]="e";A["н"]="n";A["г"]="g";A["ш"]="sh";A["щ"]="sch";A["з"]="z";A["х"]="h";A["ъ"]="'";
    A["Ф"]="F";A["Ы"]="I";A["В"]="V";A["А"]="A";A["П"]="P";A["Р"]="R";A["О"]="O";A["Л"]="L";A["Д"]="D";A["Ж"]="ZH";A["Э"]="E";
    A["ф"]="f";A["ы"]="i";A["в"]="v";A["а"]="a";A["п"]="p";A["р"]="r";A["о"]="o";A["л"]="l";A["д"]="d";A["ж"]="zh";A["э"]="e";
    A["Я"]="YA";A["Ч"]="CH";A["С"]="S";A["М"]="M";A["И"]="I";A["Т"]="T";A["Ь"]="'";A["Б"]="B";A["Ю"]="YU";
    A["я"]="ya";A["ч"]="ch";A["с"]="s";A["м"]="m";A["и"]="i";A["т"]="t";A["ь"]="'";A["б"]="b";A["ю"]="yu";

    val = val.replace(/([\u0410-\u0451])/g,
        function (str) {
            if (A[str] != 'undefined'){return A[str];}
        }
    )
    return val + '';
};

String.prototype.ellipsis = function(length) {
    var str = this;
    if(!str)
        return str + '';

    str = str + '';

    let strlen = str.length;
    if(strlen <= length)
        return str + '';

    let cliplen = parseInt((length - 3)/2 + '');
    return str.substr(0, cliplen) + '...' + str.substr(strlen - cliplen - 1, strlen) + '';
}
String.prototype.reverse = function() { return this.split("").reverse().join(""); }
String.prototype.hexToString = function() { var string = ''; for (var i = 0; i < this.length; i += 2) { string += String.fromCharCode(parseInt(this.substr(i, 2), 16)); return string; } return ''; };
String.prototype.toObject = function(delimiters) {
    var ret = {};
    if(this == '' || delimiters == undefined || delimiters.length < 2)
        return {};
    var splitted = this.split(delimiters[0]);
    splitted.forEach(function(currentValue) {
        var vals = currentValue.split(delimiters[1]);
        ret[vals[0]] = decodeURI(vals[1]);
    });
    return ret;
}
String.prototype.fromObject = function(object, delimiters) {
    var ret:string[] = [];
    Object.forEach(object, function(name: string, value: any) {
        ret.push(name + delimiters[1] + encodeURI(value));
    });
    return ret.join(delimiters[0]);
}

String.GUID = function() {
    return (Number.Rnd4() + Number.Rnd4() + Number.Rnd4() + Number.Rnd4() + Number.Rnd4() + Number.Rnd4() + Number.Rnd4() + Number.Rnd4());
};




Date.prototype.cultureInfo = function(): CurltureInfo {
	return {
		months: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
		weekdays: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
	}
}
Date.prototype.timezoneoffset = (new Date()).getTimezoneOffset() / 60;
Date.prototype.toLocalDate = function () { this.setTime(this.getTime() - this.timezoneoffset*60*60*1000); return this; };
Date.prototype.format = function(format: string): string {
	var self: Date = this;
	var p=function p(s: any){
		return( s.toString().length == 1) ? "0"+s : s;
	};
	return format ?
		format.replace(
			/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g,
			function(format) {
				switch(format){
					case"hh":return p(self.getHours()<13 ? self.getHours() : (self.getHours()-12));
					case"h":return self.getHours()<13?self.getHours():(self.getHours()-12);
					case"HH":return p(self.getHours());
					case"H":return self.getHours();
					case"mm":return p(self.getMinutes());
					case"m":return self.getMinutes();
					case"ss":return p(self.getSeconds());
					case"s":return self.getSeconds();
					case"yyyy":return self.getFullYear();
					case"yy":return self.getFullYear().toString().substring(2,4);
					case"dd":return p(self.getDate());
					case"d":return self.getDate().toString();
					case"MM":return p((self.getMonth()+1));
					case"MMM":return self.cultureInfo().months[self.getMonth()];
					case"M":return self.getMonth()+1;
					case"zzz":
					case"zz":
					case"z":
						return"";
				}
			})
		:
		this.toString();
}

export const uniqueKey = () => {
	return Number.random(10000000, 90000000);
}
