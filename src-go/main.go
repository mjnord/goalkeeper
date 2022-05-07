package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/mjnord/goalkeeper/node"
)

func main() {
	fmt.Println("Hello from goalkeeper")
	app := fiber.New()
	node.RegisterRoutes(app)
	app.Get("/hello", func(c *fiber.Ctx) error {
		return c.SendString("World")
	})
	app.Listen(":8081")
}
