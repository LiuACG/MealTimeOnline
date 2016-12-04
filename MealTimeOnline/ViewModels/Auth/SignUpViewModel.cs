using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace MealTimeOnline.ViewModels.Auth
{
    public class SignUpViewModel
    {
        [DisplayName("User Name")]
        [Required(ErrorMessage = "用户名不能为空")]
        [MinLength(4, ErrorMessage = "用户名长度不能小于4位")]
        [MaxLength(32, ErrorMessage = "用户名长度不能大于32位")]
        [DataType(DataType.Text)]
        public string Username { get; set; }

        [DisplayName("Password")]
        [Required(ErrorMessage = "密码不能为空")]
        [MinLength(6, ErrorMessage = "密码长度不能小于6位")]
        [MaxLength(32, ErrorMessage = "密码长度不能大于32位")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DisplayName("Confirm Password")]
        [Required(ErrorMessage = "请再次输入密码")]
        [Compare("Password", ErrorMessage = "两次输入的密码不一致")]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }

        [DisplayName("Email")]
        [Required(ErrorMessage = "邮箱地址不能为空")]
        [EmailAddress(ErrorMessage = "邮箱地址格式不正确")]
        public string Email { get; set; }
    }
}