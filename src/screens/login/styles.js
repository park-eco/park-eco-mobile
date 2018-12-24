export default {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "stretch"
  },
  kinput: {
    backgroundColor: "rgba(255, 255, 255, .1)",
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    height: 40,
    width: 240,
    justifyContent: 'center',
    marginVertical: 10
  },
  labelAppName: {
    color: "#3498db",
    fontFamily: "Verdana-Bold",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  logoCircle: {
    alignSelf: 'center',
    height: 150,
    width: 150,
    borderRadius: 5,
  },
  statusServer: {
    color: "#fff",
    marginLeft: 10,
    fontStyle: "italic",
    textShadowColor: '#585858',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10,
  },
  forgotPassword: {
    color: "rgba(255, 255, 255, .7)",
    fontSize: 14,
    backgroundColor: "transparent",
    textDecorationLine: "underline"
  }
};