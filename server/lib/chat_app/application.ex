defmodule ChatApp.Application do
  use Application

  def start(_type, _args) do
    children = [
      {Task, fn -> ChatAppWeb.start_link() end}
    ]

    opts = [strategy: :one_for_one, name: ChatApp.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
