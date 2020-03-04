using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace todoMvcApplicationNetCore.Models
{
    public class TodoItem
    {
        public long id { get; set; }
        [Column(TypeName = "nText")]
        public string description { get; set; }
        public bool completed { get; set; }
    }
}
