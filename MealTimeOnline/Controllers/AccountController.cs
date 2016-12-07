using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MealTimeOnline.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account/Home
        public ActionResult Home()
        {
            return View();
        }

        // GET: Account/Info
        public ActionResult Info()
        {
            return View();
        }
    }
}