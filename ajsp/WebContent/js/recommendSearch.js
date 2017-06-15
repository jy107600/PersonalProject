

//Model ， json数据从后台获取
var data = {
    rows: [
        { Id: 1, schoolNum: '162690498', name: '蒋宇', level: '一等',department: '一等',teacher: '一等', monthAvg: 1000 , yearAvg: 1000 , marketAvg: 500 , hallAvg: 500 },
        { Id: 2, schoolNum: '162690498', name: '蒋宇', level: '一等',department: '一等',teacher: '一等', monthAvg: 1000 , yearAvg: 1000 , marketAvg: 500 , hallAvg: 500 },
        { Id: 3, schoolNum: '162690498', name: '蒋宇', level: '一等',department: '一等',teacher: '一等', monthAvg: 1000 , yearAvg: 1000 , marketAvg: 500 , hallAvg: 500 },
        { Id: 4, schoolNum: '162690498', name: '蒋宇', level: '一等',department: '一等',teacher: '一等', monthAvg: 1000 , yearAvg: 1000 , marketAvg: 500 , hallAvg: 500 },
        { Id: 5, schoolNum: '162690498', name: '蒋宇', level: '一等',department: '一等',teacher: '一等', monthAvg: 1000 , yearAvg: 1000 , marketAvg: 500 , hallAvg: 500 },
        { Id: 6, schoolNum: '162690498', name: '蒋宇', level: '一等',department: '一等',teacher: '一等', monthAvg: 1000 , yearAvg: 1000 , marketAvg: 500 , hallAvg: 500 },
        { Id: 7, schoolNum: '162690498', name: '蒋宇', level: '一等',department: '一等',teacher: '一等', monthAvg: 1000 , yearAvg: 1000 , marketAvg: 500 , hallAvg: 500 },
    ],
    pagesize: 3,
    curpage:1,//当前页的页码
    rowtemplate: { Id: 0, schoolNum: '', name: '', level: '', monthAvg: '' , yearAvg: '' , marketAvg: '' , hallAvg: ''  }
};

//ViewModel
var vue = new Vue({
    el: '#app',
    data: data,   //绑定的是
    methods: {
        Delete: function () {
           alert("确定要删除这条记录吗？");
        },

        //上一页方法
        PrePage: function (event) {
            $(".pagination .active").prev().trigger("click");
        },
        //下一页方法
        NextPage: function (event) {
            $(".pagination .active").next().trigger("click");
        },
        //点击页码的方法
        NumPage: function (num, event) {
            if (this.curpage == num) {
                return;
            }
            this.curpage = num;
            $(".pagination li").removeClass("active");
            if (event.target.tagName.toUpperCase() == "LI") {
                $(event.target).addClass("active");
            }
            else {
                $(event.target).parent().addClass("active");
            }
            if (this.curpage == 1) {
                $("#prepage").addClass("disabled");
            }
            else {
                $("#prepage").removeClass("disabled");
            }
            if (this.curpage == Math.ceil(this.rows.length / this.pagesize)) {
                $("#nextpage").addClass("disabled");
            }
            else {
                $("#nextpage").removeClass("disabled");
            }
        }
    }
});