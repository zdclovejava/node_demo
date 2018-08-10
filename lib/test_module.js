module.exports = {
    curr_data:[1,2,3],
    add:function(arg1){
        const _this = this;
        _this.curr_data.push(arg1);
    },
    sub:function(idx){
        const _this = this;
        _this.curr_data.splice(idx-1,idx-1);
    }
}