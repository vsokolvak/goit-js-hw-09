const e=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""},a=document.querySelector("form.feedback-form");a.elements.email.value=e.email;a.elements.message.value=e.message;a.addEventListener("submit",n);a.addEventListener("input",r);function r(t){e.email=t.currentTarget.elements.email.value,e.message=t.currentTarget.elements.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))}function n(t){t.preventDefault();const l=t.currentTarget.elements;if(l.email.value.length===0||l.message.value.length===0)return s(),null;function s(){alert("Fill please all fields")}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",t.currentTarget.reset()}
//# sourceMappingURL=2-form-a8ef3308.js.map