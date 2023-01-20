using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Web.Common;
using Umbraco.Cms.Web.Common.Controllers;

namespace AleezaysWebsite.Controllers
{
	[Route("api/[controller]")]
	[ApiController]

	public class ProductsController : UmbracoApiController
	{
		private readonly ISqlContext _sqlContext;
		UmbracoHelper _Umbraco { get; }
		public ProductsController(ISqlContext SqlContext, UmbracoHelper Umbraco )
		{
			_sqlContext = SqlContext;
			_Umbraco = Umbraco;
		}
		public IEnumerable<string> GetAllProducts()
		{
			return new[] { "Table", "Chair", "Desk", "Computer" };
		}

		[HttpGet("date")]
		public IEnumerable<string> GetDB()
		{
	
			return new[] { "Table1", "Chair1", "Desk", "Computer" };
		}

	}

}
