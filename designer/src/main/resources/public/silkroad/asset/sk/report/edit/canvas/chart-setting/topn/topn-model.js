define(["url"],function(a){var b=Backbone.Model.extend({defaults:{},initialize:function(){},saveTopnInfo:function(b,c){var d={top:JSON.stringify(b)};$.ajax({url:a.getTopnList(this.get("reportId"),this.get("compId")),type:"POST",data:d,success:function(){c()}})},getTopnList:function(b){function c(c){e=c,$.ajax({url:a.getTopnList(d.get("reportId"),d.get("compId")),type:"get",success:function(a){var c=a.data?a.data:{};c.indList=e.yAxis,c.topTypeList={NONE:"none",DESC:"top",ASC:"bottom"},b(c)}})}var d=this;d.getCompAxis(c);var e},getCompAxis:function(b){var c=this;$.ajax({url:a.getCompAxis(c.get("reportId"),c.get("compId")),success:function(a){b(a.data)}})}});return b});