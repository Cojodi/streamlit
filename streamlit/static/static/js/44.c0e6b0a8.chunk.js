(this["webpackJsonpstreamlit-browser"]=this["webpackJsonpstreamlit-browser"]||[]).push([[44],{1802:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return d}));var o=i(2),n=i(4),a=i(6),r=i(7),l=i(0),u=i.n(l),s=i(214),p=i(168),m=i(42),c=i(1),d=function(e){Object(a.a)(i,e);var t=Object(r.a)(i);function i(){var e;Object(o.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).formClearHelper=new s.b,e.state={value:e.initialValue},e.commitWidgetValue=function(t){e.props.widgetMgr.setIntValue(e.props.element,e.state.value,t)},e.onFormCleared=function(){e.setState({value:e.props.element.default},(function(){return e.commitWidgetValue({fromUi:!0})}))},e.onChange=function(t){e.setState({value:t},(function(){return e.commitWidgetValue({fromUi:!0})}))},e}return Object(n.a)(i,[{key:"initialValue",get:function(){var e=this.props.widgetMgr.getIntValue(this.props.element);return void 0!==e?e:this.props.element.default}},{key:"componentDidMount",value:function(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}},{key:"componentDidUpdate",value:function(){this.maybeUpdateFromProtobuf()}},{key:"componentWillUnmount",value:function(){this.formClearHelper.disconnect()}},{key:"maybeUpdateFromProtobuf",value:function(){this.props.element.setValue&&this.updateFromProtobuf()}},{key:"updateFromProtobuf",value:function(){var e=this,t=this.props.element.value;this.props.element.setValue=!1,this.setState({value:t},(function(){e.commitWidgetValue({fromUi:!1})}))}},{key:"render",value:function(){var e=this.props.element,t=e.options,i=e.help,o=e.label,n=e.labelVisibility,a=e.formId,r=this.props,l=r.disabled,u=r.widgetMgr;return this.formClearHelper.manageFormClearListener(u,a,this.onFormCleared),Object(c.jsx)(p.b,{label:o,labelVisibility:Object(m.k)(null===n||void 0===n?void 0:n.value),options:t,disabled:l,width:this.props.width,onChange:this.onChange,value:this.state.value,help:i})}}]),i}(u.a.PureComponent)}}]);