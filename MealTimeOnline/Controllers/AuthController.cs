using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MealTimeOnline.ViewModels.Auth;

namespace MealTimeOnline.Controllers
{
    public class AuthController : Controller
    {
        // GET: Auth/Login
        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        // POST: Auth/Login
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(LoginViewModel login, string returnUrl) // [Bind(Include = "Username,Password,Remenber")]
        {
            if(ModelState.IsValid)
            {
                return Redirect(returnUrl ?? Url.Action("Index", "Home"));
            }
            return View();
        }

        // GET: Auth/SignUp
        [HttpGet]
        public ActionResult SignUp()
        {
            return View();
        }

        // Post: Auth/SignUp
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SignUp(SignUpViewModel signUpViewModel)
        {
            if(ModelState.IsValid)
            {
                return Content("Pass");
            }
            return View();
        }
    }
}