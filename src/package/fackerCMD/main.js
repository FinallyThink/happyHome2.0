const CMD = {
    className: 'fackerCMD',
    innerText: '',
    aimDom: null,
    insertSate: 'on',
    insterString: '',
    specialStr:"",
    insterKey: 1,
    step: 150,
    init(dom, innerText) {
        this.aimDom = dom;
        this.innerText = innerText;
        dom.className = this.className;
        //create sursor
        const sursor = document.createElement('span');
        //create textContainer
        const textContainer = document.createElement('span')
        sursor.className = 'cursor';
        textContainer.className = 'textContainer';
        dom.appendChild(textContainer);
        dom.appendChild(sursor);
    },

    //插入数据
    insertText() {
        if (this.insertSate == 'off') {
            return;
        };
        this.checkRule(this.innerText.slice(this.insterKey - 1, this.insterKey));

    },
    checkRule(chart){
        const rule = this.rule.find((e)=>{
          return  e.Symbol == chart
        })
        var that = this;
        const chartrule =  rule&&rule.do(that);
        const step = chartrule?.step || this.step;
        this.insertSate = chartrule?.insertSate || this.insertSate;
        if(this.insertSate === 'special'){
            this.specialStr += chartrule?.specialStr ?? chart;

        }else{
            this.insterString = chartrule?.insterString || this.insterString + chart;
        }
        setTimeout(() => {
            this.aimDom.querySelector('.textContainer').innerHTML = this.insterString;
            this.insterKey++ >= this.innerText.length || this.insertText();
        },step)
        
    },
    rule : [
        {
            Symbol: ",",
            do() {
              return {
                  step : 500
              }  
            }
        },
        {
            Symbol: "。",
            do() {
              return {
                  step : 1000
              }  
            }
        },
        {
            Symbol: "&",
            do({insterString}) {
              return {
                insterString : insterString + '<br/>'
              }  
            }
        },
        {
            Symbol: "<",
            do() {
              return {
                insertSate: 'special',
                specialChart : '',
                specialStr : '<span class="hiden">'
              }  
            }
        },
        {
            Symbol: ">",
            do({insterString,specialStr}) {
              return {
                insertSate: 'on',
                insterString : insterString + specialStr + '</span>',
              }  
            }
        },
        {
            Symbol: "#",
            do({insterString}) {
              return {
                insterString : insterString.slice(0,insterString.length - 1),
              }  
            }
        }
    ],
}


export default function fackerCMD({ aimDom, innerText }) {
    CMD.init(aimDom, innerText);
    CMD.insertText();
}