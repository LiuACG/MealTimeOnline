using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MealTimeOnline.Models
{
    // 角色不提供删除
    public class Role
    {
        [Key]
        public int RoleId { get; set; }

        [Required]
        [StringLength(128)]
        public string Name { get; set; } // 角色名

        [Display(Name = "缩略名")]
        [Required]
        [StringLength(128)]
        [RegularExpression(@"^(\w+)$", ErrorMessage = "缩略名只能用由英文组成")]
        public string Slug { get; set; }

        public ICollection<User> Users { get; set; }
        public ICollection<Privilege> Privileges { get; set; }
    }
}
