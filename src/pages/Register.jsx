import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { ReloadIcon } from "@radix-ui/react-icons";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();

    setTimeout(() => {
      console.log(formState);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="relative w-full md:w-[50%] order-2 md:order-1">
        <figure className="w-full h-full m-0 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/login_2.jpg"
            alt=""
          />
        </figure>
      </div>
      <div className="w-full md:w-[50%] flex flex-col justify-center items-center bg-black px-9 py-[100px] md:p-9 order-1 md:order-2">
        <Card className="w-[350px] dark:bg-dark card-base bg-gradient-to-br from-lime-400/20 to-black/50 backdrop-blur-sm shadow-sm shadow-dark">
          <CardHeader>
            <CardTitle>Registro</CardTitle>
            <CardDescription>
              Ingresa tus datos para crear una nueva cuenta
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 mt-4">
                  <Label htmlFor="email">Nombre</Label>
                  <Input
                    id="firstname"
                    type="text"
                    placeholder="John"
                    className="bg-black"
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    value={formState.name}
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <Label htmlFor="email">Apellido</Label>
                  <Input
                    id="lastname"
                    type="text"
                    placeholder="Doe"
                    className="bg-black"
                    onChange={(e) =>
                      setFormState({ ...formState, lastname: e.target.value })
                    }
                    value={formState.lastname}
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="user@email.com"
                    className="bg-black"
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    value={formState.email}
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    className="bg-black"
                    onChange={(e) =>
                      setFormState({ ...formState, password: e.target.value })
                    }
                    value={formState.password}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button
                type="submit"
                variant="default"
                className="font-semibold w-full flex-grow"
                disabled={loading}
              >
                {loading ? (
                  <ReloadIcon className="w-5 h-5 animate-spin" />
                ) : null}
                {loading ? "Enviando..." : "Registrar"}
              </Button>
              <p className="mt-4 w-full flex-grow text-sm">
                ya tengo cuenta{" "}
                <NavLink className="font-semibold text-lime-400" to={"/login"}>Iniciar Sesion.</NavLink>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Register;
