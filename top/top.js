function Tab(id){
   if(!id)return;
    // console.log(id);
    this.oBox=document.getElementById(id);
    this.aBtn=this.oBox.getElementsByTagName('input');
    this.aDiv=this.oBox.getElementsByTagName('div');

    this.init();
}
Tab.prototype.init=function(){
    var self=this;
    for(var i=0;i<this.aBtn.length;i++){
        ;(function(index){
            self.aBtn[i].onclick=function(){
                self.fnClick(index)
            }
        })(i);
    }
};
Tab.prototype.fnClick=function(index){
    for(var i=0;i<this.aBtn.length;i++){
        this.aBtn[i].className='';
        this.aDiv[i].style.display='none';
    }
    this.aBtn[index].className='ac';
    this.aDiv[index].style.display='block';
};/**
 * Created by Administrator on 2017/11/22.
 */
