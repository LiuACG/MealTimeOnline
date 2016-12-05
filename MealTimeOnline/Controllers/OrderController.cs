using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MealTimeOnline.Controllers
{
    public class OrderController : Controller
    {
        // GET: Order/Canteen
        [HttpGet]
        public ActionResult Canteen()
        {
            return View();
        }
    }
}