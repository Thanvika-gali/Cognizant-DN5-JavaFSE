public class LoggerTest {

    public static void main(String[] args) {

        Logger firstLogger = Logger.getLogger();
        Logger secondLogger = Logger.getLogger();

        firstLogger.writeLog("Application started.");
        secondLogger.writeLog("User logged in.");

        System.out.println();

        if (firstLogger == secondLogger) {
            System.out.println("Singleton Pattern implemented successfully.");
            System.out.println("Both references point to the same Logger object.");
        } else {
            System.out.println("Singleton Pattern implementation failed.");
        }
    }
}
