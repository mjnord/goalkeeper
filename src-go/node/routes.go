package node

import (
	"fmt"
	"log"
	"net/http"
	"os/exec"

	"github.com/gofiber/fiber/v2"
)

func RegisterRoutes(f *fiber.App) {
	group := f.Group("/node")

	group.Get("/status", func(c *fiber.Ctx) error {
		out, err := exec.Command("goal", "node", "status").Output()
		if err != nil {
			log.Printf("Command error: %v", err.Error())
			return c.SendStatus(http.StatusInternalServerError)
		}
		fmt.Println(string(out))

		return c.SendStatus(200)

	})

}
