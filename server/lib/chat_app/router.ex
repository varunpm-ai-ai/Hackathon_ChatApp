defmodule ChatAppWeb do
  use Plug.Router
  require Logger

  plug CORSPlug, origin: "*"
  plug :match
  plug Plug.Parsers,
    parsers: [:json],
    pass: ["application/json"],
    json_decoder: Jason
  plug :dispatch

  @messages Agent

  def start_link do
    {:ok, _} = Agent.start_link(fn -> [] end, name: @messages)
    Plug.Cowboy.http(__MODULE__, [], port: 4001)
    Logger.info("ChatApp API running at http://localhost:4001")
  end

  get "/messages" do
    messages = Agent.get(@messages, & &1)
    send_resp(conn, 200, Jason.encode!(messages))
  end

  post "/messages" do
    msg = conn.body_params
    Agent.update(@messages, &(&1 ++ [msg]))
    send_resp(conn, 201, Jason.encode!(%{status: "ok"}))
  end

  match _ do
    send_resp(conn, 404, "Not found")
  end
end
