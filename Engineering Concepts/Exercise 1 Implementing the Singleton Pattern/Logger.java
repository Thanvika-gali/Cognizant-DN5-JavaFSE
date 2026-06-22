public class Logger {

    private static Logger logger;

    private Logger() {
        System.out.println("Logger object created successfully.");
    }

    public static Logger getLogger() {

        if (logger == null) {
            logger = new Logger();
        }

        return logger;
    }

    public void writeLog(String message) {
        System.out.println("[LOG] " + message);
    }
}
