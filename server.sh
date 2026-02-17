#!/bin/bash
PORT=${PORT:-8080}
PIDFILE="/tmp/llm-calculator-server.pid"
DIR="$(cd "$(dirname "$0")" && pwd)"

start() {
    if [ -f "$PIDFILE" ] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null; then
        echo "Server laeuft bereits (PID $(cat "$PIDFILE")) auf http://localhost:$PORT"
        exit 1
    fi
    cd "$DIR"
    python3 -m http.server "$PORT" &>/dev/null &
    echo $! > "$PIDFILE"
    echo "Server gestartet auf http://localhost:$PORT (PID $!)"
}

stop() {
    if [ ! -f "$PIDFILE" ]; then
        echo "Kein laufender Server gefunden."
        exit 1
    fi
    PID=$(cat "$PIDFILE")
    if kill -0 "$PID" 2>/dev/null; then
        kill "$PID"
        rm -f "$PIDFILE"
        echo "Server gestoppt (PID $PID)"
    else
        rm -f "$PIDFILE"
        echo "Server war nicht mehr aktiv. PID-Datei bereinigt."
    fi
}

status() {
    if [ -f "$PIDFILE" ] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null; then
        echo "Server laeuft (PID $(cat "$PIDFILE")) auf http://localhost:$PORT"
    else
        echo "Server ist nicht gestartet."
    fi
}

case "${1:-}" in
    start)   start ;;
    stop)    stop ;;
    restart) stop 2>/dev/null; start ;;
    status)  status ;;
    *)
        echo "Verwendung: $0 {start|stop|restart|status}"
        echo "  PORT=9090 $0 start   # Alternativen Port verwenden"
        exit 1
        ;;
esac
