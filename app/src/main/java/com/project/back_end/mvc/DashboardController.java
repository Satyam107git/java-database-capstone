package com.project.back_end.mvc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.project.back_end.services.TokenService;

@Controller
public class DashboardController {

    @Autowired
    private TokenService tokenService;

    @GetMapping("/adminDashboard/{token}")
    public String adminDashboard(@PathVariable String token) {

        if (tokenService.validateToken(token, "admin")) {
            return "admin/adminDashboard";
        }

        return "redirect:http://localhost:8080/";
    }

    @GetMapping("/doctorDashboard/{token}")
    public String doctorDashboard(@PathVariable String token) {

        if (tokenService.validateToken(token, "doctor")) {
            return "doctor/doctorDashboard";
        }

        return "redirect:http://localhost:8080/";
    }
}


// package com.project.back_end.mvc;

// import java.util.Map;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;

// import com.project.back_end.services.TokenValidationService;

// @Controller
// public class DashboardController {

//     // Service responsible for validating tokens for different roles
//     @Autowired
//     private TokenValidationService tokenValidationService;

//     /**
//      * Admin Dashboard Access
//      * URL: /adminDashboard/{token}
//      */
//     @GetMapping("/adminDashboard/{token}")
//     public String adminDashboard(@PathVariable String token) {

//         // Validate token for admin role
//         Map<String, String> validationResult =
//                 tokenValidationService.validateToken(token, "admin");

//         // If validation map is empty → token is valid
//         if (validationResult.isEmpty()) {
//             return "admin/adminDashboard";
//         }

//         // Invalid token → redirect to login/home page
//         return "redirect:http://localhost:8080/";
//     }

//     /**
//      * Doctor Dashboard Access
//      * URL: /doctorDashboard/{token}
//      */
//     @GetMapping("/doctorDashboard/{token}")
//     public String doctorDashboard(@PathVariable String token) {

//         // Validate token for doctor role
//         Map<String, String> validationResult =
//                 tokenValidationService.validateToken(token, "doctor");

//         // If validation map is empty → token is valid
//         if (validationResult.isEmpty()) {
//             return "doctor/doctorDashboard";
//         }

//         // Invalid token → redirect to login/home page
//         return "redirect:http://localhost:8080/";
//     }
// }

// public class DashboardController {

// // 1. Set Up the MVC Controller Class:
// //    - Annotate the class with `@Controller` to indicate that it serves as an MVC controller returning view names (not JSON).
// //    - This class handles routing to admin and doctor dashboard pages based on token validation.


// // 2. Autowire the Shared Service:
// //    - Inject the common `Service` class, which provides the token validation logic used to authorize access to dashboards.


// // 3. Define the `adminDashboard` Method:
// //    - Handles HTTP GET requests to `/adminDashboard/{token}`.
// //    - Accepts an admin's token as a path variable.
// //    - Validates the token using the shared service for the `"admin"` role.
// //    - If the token is valid (i.e., no errors returned), forwards the user to the `"admin/adminDashboard"` view.
// //    - If invalid, redirects to the root URL, likely the login or home page.


// // 4. Define the `doctorDashboard` Method:
// //    - Handles HTTP GET requests to `/doctorDashboard/{token}`.
// //    - Accepts a doctor's token as a path variable.
// //    - Validates the token using the shared service for the `"doctor"` role.
// //    - If the token is valid, forwards the user to the `"doctor/doctorDashboard"` view.
// //    - If the token is invalid, redirects to the root URL.


// }
