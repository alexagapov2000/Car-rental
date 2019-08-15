﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Authentication;
using System.Security.Claims;
using System.Threading.Tasks;
using CarRental.BL;
using CarRental.DAL.Models.Auth;
using CarRental.Web.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace CarRental.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        [HttpPost("token")]
        public async Task<object> Token([FromBody]Person person)
        {
            var token = new AccountService().Token(person);
            return token;
        }

        [HttpPost("decode")]
        public async Task<string> DecodeToken([FromHeader]string jwt)
        {
            var result = new AccountService().DecodeToken(jwt);
            return result;
        }

        [HttpPost("register")]
        public async Task<Person> RegisterUser([FromBody]RegisterViewModel registerViewModel)
        {
            var person = await new AccountService().RegisterUser(registerViewModel.Username, registerViewModel.Password);
            return person;
        }
    }
}